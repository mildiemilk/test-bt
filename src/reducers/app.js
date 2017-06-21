const defaultApp = {
  isLoading: 'x',
}

const app = (state = defaultApp, action) => {
  switch (action.type) {
    case 'APP_LOADING':
      console.log('make sure it')
      return Object.assign({}, state, { isLoading: action.l })
    default:
      return state
  }
}

export default app
