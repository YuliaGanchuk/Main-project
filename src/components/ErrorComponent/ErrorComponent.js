import React from "react";
import styles from "./ErrorComponent.module.scss";
import imagePage404 from "./ErrorImage.svg";

export const ErrorComponent = ({
  mainText,
  addText,
  routeChange,
  buttonText,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.pageContainer}>
        <img src={imagePage404} alt="man with film roll"></img>
        <p className={styles.mainText}>{mainText}</p>
        <p className={styles.addText}>{addText}</p>
        <button className={styles.buttonHome} onClick={routeChange}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};
