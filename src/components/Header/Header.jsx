import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Header.module.scss'
import logo from '../../assets/imgs/pizza.png'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.start}>
        <img className={styles.logo} src={logo} alt="icon" />
        <h1>Pizzario</h1>
      </div>
      <button className={styles.cart}>Корзина</button>
    </header>
  )
}
