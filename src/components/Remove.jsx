import React from "react";

const Remove = ({ setValues }) => {
  return (
    <button className="check-list " onClick={() => setValues([])}>
      Remove All
    </button>
  );
};

export default Remove;
