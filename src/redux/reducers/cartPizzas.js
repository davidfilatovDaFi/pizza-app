export const cartPizzas = (state=[],action) => {
  switch (action.type) {
    case 'ADD_PIZZA': {
      if (state.some(pizza => 
        Object.values(pizza).slice(1).join()
        ===
        Object.values(action.payload).slice(1).join())) {
        return state
      } else {
        return [...state,action.payload]
      }
    }
    case 'DELETE_PIZZA':
      return [...state].filter(pizza => pizza.id !== action.payload)
    case 'PIZZA_AMOUNT': {
      return [...state].map(pizza => {
        if (pizza.id === action.payload.id) {
          pizza.amount = action.payload.amount
          return pizza
        } else {
          return pizza
        }
      })
    }
    default:
      return state
  }
}

