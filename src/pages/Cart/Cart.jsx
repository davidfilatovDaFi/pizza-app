import styles from './Cart.module.scss'
import PizzaCart from '../../components/PizzaCart/PizzaCart'
import { useSelector } from 'react-redux'
import Button from '../../components/UI/Button/Button'

export default function Cart() {

  const pizzas = useSelector(state => state.cartPizza)

  return (
    <>
      <main>
        <h1 className={styles.title}>Корзина</h1>
        <section className={styles.pizzas}>
          {pizzas.length === 0 
              ? <h1 className={styles.empty}>Корзина пуста</h1>
              : pizzas.map(pizza => 
                  <PizzaCart 
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
                  />
                )}
        </section>
      </main>
      {pizzas.length === 0 
        ? <div></div>
        :<footer className={styles.footer}>
        <h1 className={styles.amount}>Общая сумма: {pizzas.map(pizza => {
          let price = pizza.size === 'Маленькая' 
          ? pizza.price
          : pizza.size === 'Средняя'
          ? pizza.price + 50
          : pizza.price + 100
          return price*pizza.amount
        }).reduce((acc,pizza) => acc+pizza)} ₽</h1>
        <Button>Оформить</Button>
      </footer>}
    </>

  )
}
