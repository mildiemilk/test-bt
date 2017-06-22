const defaultProfile = {
  companyName: '',
  companyEmploy: 0,
}

const profile = (state = defaultProfile, action) => {
  switch (action.type) {
    case 'PROFILE_COMPANY':
      return Object.assign({}, state, { companyName: action.companyName })
    case 'PROFILE_NUMEMPLOY':
      return Object.assign({}, state, { companyEmploy: action.companyEmploy })
    default:
      return state
  }
}

export default profile
