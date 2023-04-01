import React from 'react'
import styles from './PizzaCart.module.scss'

export default function PizzaCart({img,name,price}) {
  return (
    <article className={styles.pizza}>
      <div>
        <img className={styles.image} src={img} alt="img" />
        <div>
          <h1 className={styles.name}>{name}</h1>
          <h2 className={styles.description}>чтото написано</h2>
        </div>
      </div>
      <div>
        <div className={styles.add}>
          <button className={styles.button}>-</button>
          <h1 className={styles.quantity}>1</h1>
          <button className={styles.button}>+</button>
        </div>
        <h1>{price} ₽</h1>
        <button className={styles.delete}>X</button>
      </div>

    </article>
  )
}
