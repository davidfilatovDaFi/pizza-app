export const reducerIsCart = (state=false,action) => {
  switch (action.type) {
    case 'IS_CART': {
      return action.payload
    }
    default:
      return state
  }
}