import React from "react";
import styles from './PizzaBlock.module.scss'

export default function Selector({type, setType, size, setSize}) {
  return (
    <div className={styles.select}>
      <ul onClick={(e) => setType(e.target.innerText)} className={styles.type}>
        <li
          className={
            type === "Традиционное"
              ? `${styles.select__item} ${styles.active}`
              : styles.select__item
          }
        >
          Традиционное
        </li>
        <li
          className={
            type === "Тонкое"
              ? `${styles.select__item} ${styles.active}`
              : styles.select__item
          }
        >
          Тонкое
        </li>
      </ul>
      <ul onClick={(e) => setSize(e.target.innerText)} className={styles.type}>
        <li
          className={
            size === "Маленькая"
              ? `${styles.select__item} ${styles.active}`
              : styles.select__item
          }
        >
          Маленькая
        </li>
        <li
          className={
            size === "Средняя"
              ? `${styles.select__item} ${styles.active}`
              : styles.select__item
          }
        >
          Средняя
        </li>
        <li
          className={
            size === "Большая"
              ? `${styles.select__item} ${styles.active}`
              : styles.select__item
          }
        >
          Большая
        </li>
      </ul>
    </div>
  );
}
