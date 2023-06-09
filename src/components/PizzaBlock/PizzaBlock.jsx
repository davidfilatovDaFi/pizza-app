import React, { useState } from 'react'
import styles from './PizzaBlock.module.scss'
import { useDispatch } from 'react-redux'
import Button from '../UI/Button/Button'

export default function PizzaBlock({img,name,description,price}) {
  const [type,setType] = useState('Традиционное')
  const [size,setSize] = useState('Средняя')

  const dispatch = useDispatch()

  const selectPizzza = () => {
    const id = Date.now()
    const pizza = {
      amount: 1,
      id,
      img,
      name,
      price,
      type,
      size
    }
    dispatch({type:'ADD_PIZZA',payload:pizza})
  }
  
  return (
    <article className={styles.pizza}>
      <img className={styles.image} src={img} alt="img" />
      <h1 className={styles.name}>{name}</h1>
      <p className={styles.text}>{description}</p>
      <div className={styles.select}>
        <ul onClick={(e) => setType(e.target.innerText)} className={styles.type}>
          <li className={
            type === 'Традиционное' 
            ? `${styles.select__item} ${styles.active}`
            : styles.select__item}>
            Традиционное
          </li>
          <li className={
            type === 'Тонкое' 
            ? `${styles.select__item} ${styles.active}`
            : styles.select__item}>
            Тонкое
          </li>
        </ul>
        <ul onClick={(e) => setSize(e.target.innerText)} className={styles.type}>
          <li className={
            size === 'Маленькая' 
            ? `${styles.select__item} ${styles.active}`
            : styles.select__item}>
            Маленькая
          </li>
          <li className={
            size === 'Средняя' 
            ? `${styles.select__item} ${styles.active}`
            : styles.select__item}>
            Средняя
          </li>
          <li className={
            size === 'Большая' 
            ? `${styles.select__item} ${styles.active}`
            : styles.select__item}>
            Большая
          </li>
        </ul>
      </div>
      <footer className={styles.buy}>
        <p className={styles.price}>от {price} ₽</p>
        <Button onClick={selectPizzza} className={styles.button}>Выбрать</Button>
      </footer>
    </article>
  )
}
