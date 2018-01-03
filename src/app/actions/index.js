import { push } from 'react-router-redux'
import axiosBase from 'axios'
import Cookies from 'js-cookie'

// STATE CONSTANTS
export const SET_JWT_COOKIE = 'SET_JWT_COOKIE'
export const UPDATE_ERRORS = 'UPDATE_ERRORS'
export const CLEAR_ERRORS = 'CLEAR_ERRORS'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_REQUEST_SUCCESS = 'LOGIN_REQUEST_SUCCESS'
export const LOGIN_REQUEST_ERROR = 'LOGIN_REQUEST_ERROR'

export const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST'
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS'
export const REGISTRATION_ERROR = 'REGISTRATION_ERROR'

export const USER_REQUEST = 'USER_REQUEST'
export const USER_REQUEST_SUCCESS = 'USER_REQUEST_SUCCESS'
export const USER_REQUEST_ERROR = 'USER_REQUEST_ERROR'
export const USER_CLEAR = 'USER_CLEAR'

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_REQUEST_SUCCESS = 'LOGOUT_REQUEST_SUCCESS'
export const LOGOUT_REQUEST_ERROR = 'LOGOUT_REQUEST_ERROR'

export const POSTS_REQUEST = 'POSTS_REQUEST'
export const POSTS_REQUEST_SUCCESS = 'POSTS_REQUEST_SUCCESS'
export const POSTS_REQUEST_ERROR = 'POSTS_REQUEST_ERROR'

export const EMAIL_CONFIRMATION_REQUEST = 'EMAIL_CONFIRMATION_REQUEST'
export const EMAIL_CONFIRMATION_REQUEST_SUCCESS =
  'EMAIL_CONFIRMATION_REQUEST_SUCCESS'
export const EMAIL_CONFIRMATION_REQUEST_ERROR =
  'EMAIL_CONFIRMATION_REQUEST_ERROR'

export const UPDATE_DROPDOWN = 'UPDATE_DROPDOWN'

// URL CONSTANTS
const LOGIN_URL = 'login/'
const LOGOUT_URL = 'logout/'
const REGISTRATION_URL = 'registration/'
const USER_URL = 'user/'
const VERIFY_JWT_URL = 'verify_token/'
const POSTS_URL = 'posts/'
const EMAIL_CONFIRMATION_URL = `${REGISTRATION_URL}verify-email/`

// URL CONSTANTS
const BASE_URL =
  process.env.NODE_ENV === 'production' ? '/' : 'http://localhost/'

var axios = axiosBase.create({
  baseURL: BASE_URL
})

function setJWTCookie(token) {
  Cookies.set('token', token)
}

function removeJWTCookie(token) {
  Cookies.remove('token')
}

function addJWTToAxios() {
  return (dispatch, getState) => {
    const token = Cookies.get('token')
    if (token !== '') {
      axios.defaults.headers.common['Authorization'] = `JWT ${token}`
    }
  }
}

function removeJWTFromAxios() {
  delete axios.defaults.headers.common['Authorization']
}

export function verifyJWT() {
  return (dispatch, getState) => {
    const token = Cookies.get('token')
    if (token !== '' && typeof token !== 'undefined') {
      const data = { token: token }

      return axios
        .post(VERIFY_JWT_URL, data)
        .then(response => {
          dispatch(addJWTToAxios())
          return true
        })
        .catch(error => {
          if (
            !error.response.data.non_field_errors[0] ===
            'Signature has expired.'
          ) {
            console.error(error)
          }
        })
    }
  }
}

export function updateDropDown() {
  return {
    type: UPDATE_DROPDOWN
  }
}

export async function obtainFormOptions(uri) {
  try {
    if (uri.slice(-1) !== '/') {
      uri = uri + '/'
    }
    const FORM_OPTIONS_URL = BASE_URL + uri
    const options = await axios
      .options(FORM_OPTIONS_URL)
      .then(response => {
        return response.data
      })
      .catch(error => {
        console.error(error)
      })
    return options
  } catch (error) {
    console.error(error)
  }
}

export function updateErrors(status, data) {
  return {
    type: UPDATE_ERRORS,
    status: status,
    fields: data
  }
}

export function clearErrors() {
  return {
    type: CLEAR_ERRORS
  }
}

export function loginRequest() {
  return {
    type: LOGIN_REQUEST
  }
}

export function loginRequestSuccess(data) {
  setJWTCookie(data.token)
  addJWTToAxios()
  return {
    type: LOGIN_REQUEST_SUCCESS
  }
}

export function loginRequestError() {
  return {
    type: LOGIN_REQUEST_ERROR
  }
}

export function loginAction(data) {
  return (dispatch, getState) => {
    dispatch(loginRequest())
    axios
      .post(LOGIN_URL, data)
      .then(response => {
        dispatch(loginRequestSuccess(response.data)).then(() => {
          dispatch(userRequestSuccess(response.data.user)).then(() => {
            dispatch(push('/'))
          })
        })
      })
      .catch(error => {
        dispatch(loginRequestError()).then(() => {
          dispatch(updateErrors(error.response.status, error.response.data))
        })
      })
  }
}

export function logoutRequestSuccess() {
  return {
    type: LOGOUT_REQUEST_SUCCESS
  }
}

export function logoutRequestError() {
  return {
    type: LOGOUT_REQUEST_ERROR
  }
}

export function logoutAction(data) {
  return (dispatch, getState) => {
    dispatch(loginRequest())
    axios
      .post(LOGOUT_URL)
      .then(response => {
        removeJWTCookie()
        removeJWTFromAxios()
        dispatch(userClear()).then(() => {
          dispatch(push('/'))
        })
      })
      .catch(error => {
        dispatch(logoutRequestError()).then(() => {
          dispatch(updateErrors(error.response.status, error.response.data))
        })
      })
  }
}

export function registrationRequest() {
  return {
    type: REGISTRATION_REQUEST
  }
}

export function registrationRequestSuccess() {
  return {
    type: REGISTRATION_SUCCESS
  }
}

export function registrationRequestError() {
  return {
    type: REGISTRATION_REQUEST
  }
}

export function registrationAction(data) {
  return (dispatch, getState) => {
    dispatch(registrationRequest())
    axios
      .post(REGISTRATION_URL, data)
      .then(response => {
        dispatch(registrationRequestSuccess()).then(() => {
          dispatch(loginRequestSuccess(response.data)).then(() => {
            dispatch(userRequestSuccess(response.data.user)).then(() => {
              dispatch(push('/'))
            })
          })
        })
      })
      .catch(error => {
        dispatch(registrationRequestError())
        dispatch(updateErrors(error.response.status, error.response.data))
      })
  }
}

export function userRequest() {
  return {
    type: USER_REQUEST
  }
}

export function userRequestSuccess(data) {
  return {
    type: USER_REQUEST_SUCCESS,
    data: data
  }
}

export function userRequestError() {
  return {
    type: USER_REQUEST_ERROR
  }
}

export function userClear() {
  return {
    type: USER_CLEAR
  }
}

export function userUpdateAction() {
  return (dispatch, getState) => {
    axios
      .post(USER_URL, data)
      .then(response => {
        console.log('test')
      })
      .catch(error => {
        dispatch(userRequestError()).then(() => {
          dispatch(updateErrors(error.response.status, error.response.data))
        })
      })
  }
}

export function getUserAction() {
  return (dispatch, getState) => {
    dispatch(verifyJWT()).then(verfied => {
      if (verfied) {
        dispatch(userRequest())
        axios
          .get(USER_URL)
          .then(response => {
            dispatch(userRequestSuccess(response.data))
          })
          .catch(error => {
            dispatch(userRequestError())
            console.log(error)
          })
      }
    })
  }
}

export function postsRequestSuccess(data) {
  return {
    type: POSTS_REQUEST_SUCCESS,
    data: data
  }
}

export function postsRequestError() {
  return {
    type: POSTS_REQUEST_ERROR
  }
}

export function postsRequest() {
  return (dispatch, getState) => {
    axios
      .get(POSTS_URL)
      .then(response => {
        dispatch(postsRequestSuccess(response.data))
      })
      .catch(error => {
        dispatch(postsRequestError()).then(() => {
          dispatch(updateErrors(error.response.status, error.response.data))
        })
      })
  }
}

export function emailConfirmationRequest() {
  return {
    type: EMAIL_CONFIRMATION_REQUEST
  }
}

export function emailConfirmationRequestSuccess(data) {
  return {
    type: EMAIL_CONFIRMATION_REQUEST_SUCCESS
  }
}

export function emailConfirmationRequestError() {
  return {
    type: EMAIL_CONFIRMATION_REQUEST_ERROR
  }
}

export function emailConfirmationAction(key) {
  return (dispatch, getState) => {
    dispatch(emailConfirmationRequest())
    const data = {
      key: key
    }
    axios
      .post(EMAIL_CONFIRMATION_URL, data)
      .then(response => {
        dispatch(emailConfirmationRequestSuccess())
      })
      .catch(error => {
        dispatch(emailConfirmationRequestError()).then(() => {
          dispatch(updateErrors(error.response.status, error.response.data))
        })
      })
  }
}
