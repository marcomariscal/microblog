import React from "react";

const Alert = ({ msgs }) => {
  return (
    <div class="alert alert-danger" role="alert">
      {msgs.map((m) => (
        <p>{m}</p>
      ))}
    </div>
  );
};

export default Alert;
