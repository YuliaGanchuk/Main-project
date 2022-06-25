import React from "react";
import { useNavigate } from "react-router-dom";
import { ErrorComponent } from "../ErrorComponent/ErrorComponent";

export const NoResultComponent = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    navigate("/");
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
