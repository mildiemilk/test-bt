const defaultCompany = {
  count: 0,
}

const company = (state = defaultCompany, action) => {
  switch (action.type) {
    case 'COMPANY_COUNT':
      return Object.assign({}, state, { count: action.count + 1 })
    case 'COMPANY_DISCOUNT':
      return Object.assign({}, state, { count: action.count - 1 })
    default:
      return state
  }
}

export default company
