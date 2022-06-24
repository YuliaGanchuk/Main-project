import React from "react";
import { useNavigate } from "react-router-dom";
import { ErrorComponent } from "../../components/ErrorComponent/ErrorComponent";

export const Page404 = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    navigate("/");
  };
  const mainText = "Lost your way?";
  const addText =
    "Oops! This is awkward. You are looking for something that doesn't actually exist";
  const buttonText = "Go Home";

  return (
    <ErrorComponent
      mainText={mainText}
      addText={addText}
      routeChange={routeChange}
      buttonText={buttonText}
    />
  );
};
