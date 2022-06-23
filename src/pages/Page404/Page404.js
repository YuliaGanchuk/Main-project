import React from "react";
import styles from "./Page404.module.scss";
import imagePage404 from "./imagePage404.svg";
import { useNavigate } from "react-router-dom";


export const Page404 = () => {
  let navigate = useNavigate();

  const routeChange = () => {
    navigate("/");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.pageContainer}>
        <img src={imagePage404} alt="man with film roll"></img>
        <p className={styles.mainText}>Lost your way?</p>
        <p className={styles.addText}>
          Oops! This is awkward. You are looking for something that doesn't
          actually exist.
        </p>
        <button className={styles.buttonHome} onClick={routeChange}>
          Go Home
        </button>
      </div>
    </div>
  );
};
