import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Cart.module.scss'
import { pizzas } from '../Home/Home'
import PizzaCart from '../../components/PizzaCart/PizzaCart'
import Header from '../../components/Header/Header'

export default function Cart() {
  return (
    <>
      <Header name={'Обратно'} link={'/'}/>
      <main >
        <h1 className={styles.title}>Корзина</h1>
        <section className={styles.row}>
          {pizzas.map(pizza => <PizzaCart 
            key={pizza.id}
            img={pizza.imageUrl} 
            name={pizza.name}
            price={pizza.price}/>)}
        </section>
      </main>
    </>

  )
}
