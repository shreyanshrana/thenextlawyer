import Autosuggest from "react-autosuggest";
import React, { Component } from "react";
import { Link, Redirect } from "react-router";
import "./Search.scss";

const documents = [
  { name: "Affidavit Regarding Age", url: "age-affidavit" },
  { name: "Employment Contract", url: "emp-contarct" },
  { name: "General Power of Attorney", url: "gpa" },
  { name: "Gift Deed", url: "gift-deed" },
  { name: "Marriage Registeration", url: "marriage" },
  { name: "Name Change Affidavit", url: "name-change" },
  { name: "No Third Party Loss", url: "no-tpl" },
  { name: "Non Disclosure Agreement", url: "nda" },
  { name: "Rent", url: "rent" },
  { name: "Revocation of POA", url: "revocation" },
  { name: "Sale/Purchase of Vehicle", url: "vehicle" },
  { name: "Special Power of Attorney", url: "spa" },
  { name: "Will", url: "will" }
];

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === "") {
    return [];
  }

  const regex = new RegExp("^" + escapedValue, "i");

  return documents.filter(document => regex.test(document.name));
}

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return <span>{suggestion.name}</span>;
}

class Search extends React.Component {
  constructor(props) {
    super();
    this.state = {
      value: "",
      suggestions: []
    };
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };
  shouldRenderSuggestions(value) {
    return value.trim().length >= 0;
  }
  onSuggestionSelected = (
    event,
    { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }
  ) => {
    const url = suggestion.url;
    // console.log("/" + url);
    window.open("/services/" + url, "_self");
    // props.history.push("/dashboard");
    return <Redirect to="/hello" />;
  };
  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "What legal document are you looking for ?",
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        // alwaysRenderSuggestions={true}
        onSuggestionSelected={this.onSuggestionSelected}
      />
    );
  }
}

export default Search;
