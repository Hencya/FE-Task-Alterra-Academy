import React from "react";
import styles from "./Header.module.css";

export default function header({ title }) {
  return (
    <div className={styles.header}>
      <h1>{title}</h1>
    </div>
  );
}
