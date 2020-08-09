import React from "react";
import { ClipLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center">
      <ClipLoader size={50} color="#123abc" />
    </div>
  );
};

export default Spinner;
