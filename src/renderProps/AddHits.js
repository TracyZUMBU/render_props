import React, { useState } from "react";

const AddHits = ({ render }) => {
  console.log("render:", render.hits);
  const [hits, setHits] = useState(0);
  const addOne = () => {
    setHits((prevState) => {
      return prevState + 1;
    });
  };
  return <div>{render(hits, addOne)}</div>;
};

export default AddHits;
