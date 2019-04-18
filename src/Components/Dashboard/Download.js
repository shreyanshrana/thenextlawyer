import React, { Component } from "react";
import Download_Icon from "./Download_Icon";
export default class Download extends Component {
  render() {
    const buttonClick = () =>{
      console.log("he");
      return(
        <Download_Icon
            document_title="Document 2"
            document_state="incomplete"
            document_downloadLink="test-link1"
            document_editLink="test-link2"
          />
      )
    }
    return (
      <div className="dashboard__container clearfix">
        <div className="display6">Your Documents</div>
        <div className="col-12 p-3 clearfix" style={{ width: "800px" }}>
          <Download_Icon
            document_title="Document 1"
            document_state="complete"
            document_downloadLink="test-link"
            document_editLink="test-link"
          />
          <button onClick={buttonClick}>hello</button>
        </div>
      </div>
    );
  }
}
