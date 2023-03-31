import React, { useState } from 'react'
import styles from './PizzaBlock.module.scss'

export default function PizzaBlock({img,name,description,price}) {
  const [type,setType] = useState('традиционное')
  const [size,setSize] = useState('Средняя')
  const [pizza,setPizza] = useState({})

  const selectPizzza = () => {
    const pizza = {
      img,
      name,
      price,
      type,
      size
    }
    setPizza(pizza)
  }
  
  console.log(pizza)
  return (
    <article className={styles.pizza}>
      <img className={styles.image} src={img} alt="img" />
      <h1 className={styles.name}>{name}</h1>
      <p className={styles.text}>{description}</p>
      <div className={styles.select}>
        <ul onClick={(e) => setType(e.target.innerText)} className={styles.type}>
          <li className={`${styles.select__item} ${styles.active}`}>Традиционное</li>
          <li className={styles.select__item}>Тонкое</li>
        </ul>
        <ul onClick={(e) => setSize(e.target.innerText)} className={styles.type}>
          <li className={styles.select__item}>Маленькая</li>
          <li className={`${styles.select__item} ${styles.active}`}>Средняя</li>
          <li className={styles.select__item}>Большая</li>
        </ul>
      </div>
      <footer className={styles.buy}>
        <p className={styles.price}>от {price} ₽</p>
        <button onClick={selectPizzza} className={styles.button}>Выбрать</button>
      </footer>
    </article>
  )
}
