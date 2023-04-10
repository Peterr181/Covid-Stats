import React from "react";
import styles from "./WorldDataInput.module.scss";

const WorldDataInput = ({ getInputValue }) => {
  return (
    <div className={styles.worlddata__container__input}>
      <input onChange={getInputValue} type="text" required="required" />
      <span>Country</span>
    </div>
  );
};

export default WorldDataInput;
