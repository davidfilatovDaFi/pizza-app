import { useState } from "react"
import { useDispatch } from "react-redux"

export const useSelectPizza = (img,name,price) => {
  const [type,setType] = useState('Традиционное')
  const [size,setSize] = useState('Средняя')

  const dispatch = useDispatch()

  const selectPizza = () => {
    const id = Date.now()
    const pizza = {
      amount: 1,
      id,
      img,
      name,
      price,
      type,
      size
    }
    dispatch({type:'ADD_PIZZA',payload:pizza})
  }

  return [selectPizza, type, setType, size, setSize]
}