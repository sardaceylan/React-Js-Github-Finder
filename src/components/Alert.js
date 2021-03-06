import React from "react";

const Alert = (props) => {
  return (
    props.alert !== null && (
      <div className="container my-2">
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert"
        >
          {props.alert.msg}
          <button className="close" data-bs-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    )
  );
};

export default Alert;
