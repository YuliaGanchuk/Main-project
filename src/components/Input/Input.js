import React from "react";
import styles from "./Input.module.scss";
import searchIcon from "./search-normal.svg";
import closeIcon from "./close-square.svg";

export const Input = ({ text, onchangeFunc, onclickFunc }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.searchIcon}>
        <img className={styles.icon} src={searchIcon} alt="search icon"></img>
      </div>
      <input
        className={styles.inputContainer}
        type="text"
        value={text}
        onChange={onchangeFunc}
        placeholder="Search Movies or TV Shows"
      ></input>
      <button onClick={onclickFunc} className={styles.clearButton}>
        {text && (
          <img
            className={styles.icon}
            src={closeIcon}
            alt="clear text icon"
          ></img>
        )}
      </button>
    </div>
  );
};
