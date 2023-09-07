import React, { useEffect } from 'react'
import styles from './PizzaCart.module.scss'
import { useDispatch, useSelector } from 'react-redux'

export default function PizzaCart({img,name,type,size,id,price,deletePizza}) {

  const dispatch = useDispatch()
  const amount = useSelector(
    (state) => state.cartPizza.filter((el) => el.id === id)[0].amount
  )

  useEffect(() => {
    dispatch({type:'PIZZA_AMOUNT',payload:{id,amount}})
  }, [amount])

  return (
    <article className={styles.pizza}>
      <img className={styles.image} src={img} alt="img" />
      <div className={styles.titles}>
        <h1 className={styles.name}>{name}</h1>
        <h2 className={styles.description}>{size}, {type} тесто</h2>
      </div>
      <div className={styles.buttons}>
        <div className={styles.add}>
          <button onClick={() => {
            if (amount === 1) return
            dispatch({type: 'PIZZA_AMOUNT', payload: {id,amount: amount-1}})
          }} className={styles.button}>-</button>
          <h1 className={styles.quantity}>{amount}</h1>
          <button onClick={() => dispatch({type: 'PIZZA_AMOUNT', payload: {id,amount: amount+1}})} className={styles.button}>+</button>
        </div>
        <h1 className={styles.price}>{price*amount} ₽</h1>
        <button onClick={() => dispatch({type:'DELETE_PIZZA',payload:id})} className={styles.delete}>X</button>
      </div>
    </article>
  )
}
