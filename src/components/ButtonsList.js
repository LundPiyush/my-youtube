import React from "react";
import { buttons } from "../utils/constants";
import Button from "./Button";

const ButtonsList = () => {
  return (
    <div className="flex">
      {buttons.map((name) => (
        <Button name={name} key={name} />
      ))}
    </div>
  );
};

export default ButtonsList;
