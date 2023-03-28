import React from 'react'
import styles from './PizzaBlock.module.scss'

export default function PizzaBlock({img,name,description,price}) {
  return (
    <article className={styles.pizza}>
      <img className={styles.image} src={img} alt="img" />
      <h1 className={styles.name}>{name}</h1>
      <p className={styles.text}>{description}</p>
      <div className={styles.select}>
        <ul className={styles.type}>
          <li className={`${styles.select__item} ${styles.active}`}>Традиционное</li>
          <li className={styles.select__item}>Тонкое</li>
        </ul>
        <ul className={styles.type}>
          <li className={`${styles.select__item} ${styles.active}`}>Маленькая</li>
          <li className={styles.select__item}>Средняя</li>
          <li className={styles.select__item}>Большая</li>
        </ul>
      </div>
      <div className={styles.buy}>
        <p className={styles.price}>от {price} ₽</p>
        <button className={styles.button}>Выбрать</button>
      </div>
    </article>
  )
}
