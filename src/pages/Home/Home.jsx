import React, { useEffect, useState } from 'react'
import PizzaBlock from '../../components/PizzaBlock/PizzaBlock'
import styles from './Home.module.scss'
import Header from '../../components/Header/Header'
import { pizzas } from '../../assets/consts/pizza'

export default function Pizzas() {
  return (
    <>
      <Header name={'Корзина'} link={'/cart'}/>
      <main className={styles.pizzas}>
        <h1 className={styles.title}>Пицца</h1>
        <section className={styles.row}>{pizzas.map(pizza => <PizzaBlock 
          key={pizza.id}
          id={pizza.id}
          img={pizza.imageUrl} 
          name={pizza.name} 
          description={pizza.description}
          price={pizza.price}/>)}
        </section>
      </main>
    </>

  )
}
