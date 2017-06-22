import { actionTypes as types, urls } from '../constants'
import { post } from '../helpers'

export const loading = l => dispatch => {
  console.log('should displatch something')
  dispatch({ type: 'APP_LOADING', l })
}

export const companyCount = cCount => dispatch => {
  dispatch({ type: 'COMPANY_COUNT', count: cCount })
}

export const companyDiscount = cCount => dispatch => {
  dispatch({ type: 'COMPANY_DISCOUNT', count: cCount })
}

export const companyFill = com => dispatch => {
  dispatch({ type: 'PROFILE_COMPANY', companyName: com })
  window.location.href = '/ProfileNumEmployee'
}
export const numEmployeeFill = com => dispatch => {
  dispatch({ type: 'PROFILE_NUMEMPLOY', companyEmploy: com })
  window.location.href = '/List'
}

export const signup = ({ email, password }) => dispatch => {
  dispatch({ type: types.SIGNUP_REQUEST })
  post({
    url: urls.SIGNUP,
    body: { email, password },
    success: types.SIGNUP_SUCCESS,
    failure: types.SIGNUP_FAILURE,
    dispatch,
  }).then(response => {
    window.location.href = '/login'
  })
}

export const login = ({ email, password }) => dispatch => {
  dispatch({ type: types.LOGIN_REQUEST })
  post({
    url: urls.LOGIN,
    body: { email, password },
    success: types.LOGIN_SUCCESS,
    failure: types.LOGIN_FAILURE,
    dispatch,
  })
}

export const loginWithToken = () => (dispatch, getState) => {
  const token = getState().user.token

  if (typeof token === 'undefined') return

  dispatch({ type: types.LOGIN_REQUEST })
  post({
    url: urls.LOGIN_WITH_TOKEN,
    body: { token },
    success: types.LOGIN_SUCCESS,
    failure: types.LOGIN_FAILURE,
    dispatch,
  })
}
