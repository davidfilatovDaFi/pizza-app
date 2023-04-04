import React, { useEffect, useState } from 'react'
import styles from './PizzaCart.module.scss'
import { useDispatch } from 'react-redux'

export default function PizzaCart({img,name,price,type,size,deletePizza,id,getAmount}) {

  const [amount,setAmount] = useState(1)

  const dispatch = useDispatch()
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
            setAmount(amount-1)
          }} className={styles.button}>-</button>
          <h1 className={styles.quantity}>{amount}</h1>
          <button onClick={() => setAmount(amount+1)} className={styles.button}>+</button>
        </div>
        <h1>{price*amount} ₽</h1>
        <button onClick={() => deletePizza(id)} className={styles.delete}>X</button>
      </div>
    </article>
  )
}
