import React from "react";
import { ErrorComponent } from "../ErrorComponent/ErrorComponent";

export const NoResultComponent = ({ text, setText }) => {
  const routeChange = () => {
    setText("");
    window.scrollTo(0,0);
  };

  const mainText = "No results.";
  const addText =
    "Oops! This is awkward. There are no results that match your search";
  const buttonText = "Back to the main list";

  return (
    <ErrorComponent
      mainText={mainText}
      addText={addText}
      routeChange={routeChange}
      buttonText={buttonText}
    />
  );
};
