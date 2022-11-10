import React from "react";
import styles from "../../assets/styles/LoadingSpinner.module.css";

function LoadingSpinner() {
  return (
    <div className={styles["sk-chase"]}>
      <div className={styles["sk-chase-dot"]}></div>
      <div className={styles["sk-chase-dot"]}></div>
      <div className={styles["sk-chase-dot"]}></div>
      <div className={styles["sk-chase-dot"]}></div>
      <div className={styles["sk-chase-dot"]}></div>
      <div className={styles["sk-chase-dot"]}></div>
    </div>
  );
}

export default LoadingSpinner;
