import React from "react";

const Download_Icon = props => {

    const download_color = (props.document_state=="complete") ? "#aceca1" : "#a6d9f7";
  return (
    <div className="col-4 text-center float-left clearfix">
      <div className="display3 mb-0">
        <ion-icon
          name="document"
          style={{ color: download_color, margin: "10px" }}
        />
        <div className="display10" style={{ margin: "-30%", padding: "5px" }}>
          {props.document_title}
          <br />
          <a
            href={props.document_downloadLink}
            className="btn btn-success mx-2 mt-3"
          >
            <ion-icon name="download" /> Download
          </a>
          <a href={props.document_editLink} className="btn btn-info mx-2 mt-3">
            <ion-icon name="create" /> Edit
          </a>
        </div>
      </div>
    </div>
  );
};

export default Download_Icon;
