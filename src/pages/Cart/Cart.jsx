import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Cart.module.scss'
import PizzaCart from '../../components/PizzaCart/PizzaCart'
import Header from '../../components/Header/Header'
import { useSelector } from 'react-redux'

export default function Cart() {

  const pizzas = useSelector(state => state)

  return (
    <>
      <Header name={'Обратно'} link={'/'}/>
      <main >
        <h1 className={styles.title}>Корзина</h1>
        <section className={styles.row}>
          {pizzas.length === 0 
            ? <h1>Корзина пуста</h1>
            : pizzas.map(pizza => <PizzaCart 
            key={pizza.id}
            img={pizza.img} 
            name={pizza.name}
            type={pizza.type}
            size={pizza.size}
            price={pizza.size === 'Маленькая' 
              ? pizza.price
              : pizza.size === 'Средняя'
              ? pizza.price + 50
              : pizza.price + 100}/>)}
        </section>
      </main>
    </>

  )
}
