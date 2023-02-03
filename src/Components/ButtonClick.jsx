import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const ButtonClick = ({ get }) => {
  const [select, setSelect] = useState();

  const handleClick = () => {
    setSelect(get);
  };
  console.log(select);
  return (
    <Button onClick={() => handleClick()} variant="warning">
      Add to favourites
    </Button>
  );
};

export default ButtonClick;
