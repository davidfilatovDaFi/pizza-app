export const cartPizzas = (state=[],action) => {
  switch (action.type) {
    case 'ADD_PIZZA':
      return [...state,action.payload]
      default:
        return state
  }
}

