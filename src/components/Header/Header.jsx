import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Header.module.scss'
import logo from '../../assets/imgs/pizza.png'
import { Link  } from 'react-router-dom'
import Button from '../UI/Button/Button'

export default function Header() {

  const isCart = useSelector(state => state.isCart)
  const dispatch = useDispatch()

  return (
    <header className={styles.header}>
      <div className={styles.start}>
        <img className={styles.logo} src={logo} alt="icon" />
        <h1>Pizzario</h1>
      </div>
      <Link to={isCart ? '/' : '/cart'}>
        <Button onClick={() => dispatch({type: 'IS_CART', payload: !isCart})}>{isCart ? 'Обратно' : 'Корзина'}</Button>
      </Link>
    </header>
  )
}
