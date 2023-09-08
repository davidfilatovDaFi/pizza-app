import React from 'react'
import styles from './PizzaBlock.module.scss'
import Button from '../UI/Button/Button'
import Selector from './Selector'
import { useSelectPizza } from '../../hooks/useSelectPizza'

export default function PizzaBlock({img,name,description,price}) {

  const [selectPizza, type, setType, size, setSize] = useSelectPizza(
    img,
    name,
    price)

  return (
    <article className={styles.pizza}>
      <img className={styles.image} src={img} alt="img" />
      <h1 className={styles.name}>{name}</h1>
      <p className={styles.text}>{description}</p>
      <Selector type={type} setType={setType} size={size} setSize={setSize}/>
      <footer className={styles.buy}>
        <p className={styles.price}>от {price} ₽</p>
        <Button onClick={selectPizza} className={styles.button}>Выбрать</Button>
      </footer>
    </article>
  )
}
