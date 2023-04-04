import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Cart.module.scss'
import PizzaCart from '../../components/PizzaCart/PizzaCart'
import Header from '../../components/Header/Header'
import { useDispatch, useSelector } from 'react-redux'

export default function Cart() {
  const [amountCart,setAmountCart] = useState(0)

  const pizzas = useSelector(state => state)
  const dispatch = useDispatch()

  return (
    <>
      <Header name={'Обратно'} link={'/'}/>
      <main >
        <h1 className={styles.title}>Корзина</h1>
        <section className={styles.pizzas}>
          {pizzas.length === 0 
            ? <h1 className={styles.empty}>Корзина пуста</h1>
            : pizzas.map(pizza => <PizzaCart 
            key={pizza.id}
            id={pizza.id}
            img={pizza.img} 
            name={pizza.name}
            type={pizza.type}
            size={pizza.size}
            price={pizza.size === 'Маленькая' 
              ? pizza.price
              : pizza.size === 'Средняя'
              ? pizza.price + 50
              : pizza.price + 100}
              deletePizza = {(id) => dispatch({type:'DELETE_PIZZA',payload:id})}
              />)}
        </section>
      </main>
      <footer className={styles.footer}>
        <h1 className={styles.amount}>Общая сумма: {pizzas.map(pizza => {
          let price = pizza.size === 'Маленькая' 
          ? pizza.price
          : pizza.size === 'Средняя'
          ? pizza.price + 50
          : pizza.price + 100
          return price*pizza.amount
        }).reduce((acc,pizza) => acc+pizza)} ₽</h1>
        <button className={styles.button}>Офромить</button>
      </footer>
    </>

  )
}
