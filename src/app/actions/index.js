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

export const POST_REQUEST = 'POST_REQUEST'
export const POST_REQUEST_SUCCESS = 'POST_REQUEST_SUCCESS'
export const POST_REQUEST_ERROR = 'POST_REQUEST_ERROR'
export const POST_CLEAR = 'POST_CLEAR'

export const POST_LIST_REQUEST = 'POST_LIST_REQUEST'
export const POST_LIST_REQUEST_SUCCESS = 'POST_LIST_REQUEST_SUCCESS'
export const POST_LIST_REQUEST_ERROR = 'POST_LIST_REQUEST_ERROR'

export const POST_LIST_OPTIONS_REQUEST = 'POST_LIST_OPTIONS_REQUEST'
export const POST_LIST_OPTIONS_REQUEST_SUCCESS =
  'POST_LIST_OPTIONS_REQUEST_SUCCESS'
export const POST_LIST_OPTIONS_REQUEST_ERROR = 'POST_LIST_OPTIONS_REQUEST_ERROR'

export const EMAIL_CONFIRMATION_REQUEST = 'EMAIL_CONFIRMATION_REQUEST'
export const EMAIL_CONFIRMATION_REQUEST_SUCCESS =
  'EMAIL_CONFIRMATION_REQUEST_SUCCESS'
export const EMAIL_CONFIRMATION_REQUEST_ERROR =
  'EMAIL_CONFIRMATION_REQUEST_ERROR'

export const PASSWORD_UPDATE_REQUEST = 'PASSWORD_UPDATE_REQUEST'
export const PASSWORD_UPDATE_REQUEST_SUCCESS = 'PASSWORD_UPDATE_REQUEST_SUCCESS'
export const PASSWORD_UPDATE_REQUEST_ERROR = 'PASSWORD_UPDATE_REQUEST_ERROR'

export const PASSWORD_RESET_REQUEST = 'PASSWORD_RESET_REQUEST'
export const PASSWORD_RESET_REQUEST_SUCCESS = 'PASSWORD_RESET_REQUEST_SUCCESS'
export const PASSWORD_RESET_REQUEST_ERROR = 'PASSWORD_RESET_REQUEST_ERROR'

export const PASSWORD_RESET_CONFIRM_REQUEST = 'PASSWORD_RESET_CONFIRM_REQUEST'
export const PASSWORD_RESET_CONFIRM_REQUEST_SUCCESS =
  'PASSWORD_RESET_CONFIRM_REQUEST_SUCCESS'
export const PASSWORD_RESET_CONFIRM_REQUEST_ERROR =
  'PASSWORD_RESET_CONFIRM_REQUEST_ERROR'

export const UPDATE_DROPDOWN = 'UPDATE_DROPDOWN'

// URL CONSTANTS
const LOGIN_URL = 'login/'
const LOGOUT_URL = 'logout/'
const REGISTRATION_URL = 'registration/'
const USER_URL = 'user/'
const VERIFY_JWT_URL = 'verify_token/'
const POSTS_URL = 'posts/'
const EMAIL_CONFIRMATION_URL = `${REGISTRATION_URL}verify-email/`
const PASSWORD_UPDATE_URL = 'password/change/'
const PASSWORD_RESET_URL = 'password/reset/'
const PASSWORD_RESET_CONFIRM_URL = 'password/reset/confirm/'

// URL CONSTANTS
const BASE_URL =
  process.env.NODE_ENV === 'production' ? '/' : 'http://api.localtest.me/'

var axios = axiosBase.create({
  baseURL: BASE_URL
})

function globalErrorHandler(error, dispatch, location = '') {
  if (error.response.data.non_field_errors || error.response.data.detail) {
    const errorMessage = error.response.data.detail
      ? error.response.data.detail
      : error.response.data.non_field_errors[0]
    if (
      errorMessage === 'Signature has expired.' ||
      errorMessage === 'Authentication credentials were not provided.'
    ) {
      if (location.includes('settings')) {
        dispatch(push('/login'))
      }
    } else {
      console.error(error)
    }
  } else {
    console.error(error)
  }
}

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

export function verifyJWT(location = '') {
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
          globalErrorHandler(error, dispatch, location)
        })
    }
  }
}

export function updateDropDown() {
  return {
    type: UPDATE_DROPDOWN
  }
}

export async function obtainFormOptions(uri, dispatch) {
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
        globalErrorHandler(error, dispatch)
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
        dispatch(loginRequestSuccess(response.data))
        dispatch(userRequestSuccess(response.data.user))
        dispatch(push('/'))
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response)
        } else if (error.request) {
          console.log(error.request)
        } else {
          console.log('Error', error.message)
        }
        dispatch(loginRequestError())
        dispatch(updateErrors(error.response.status, error.response.data))
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

export function logoutAction() {
  return (dispatch, getState) => {
    dispatch(loginRequest())
    axios
      .post(LOGOUT_URL)
      .then(response => {
        removeJWTCookie()
        removeJWTFromAxios()
        dispatch(updateDropDown())
        dispatch(userClear())
        dispatch(push('/'))
      })
      .catch(error => {
        dispatch(logoutRequestError())
        dispatch(updateErrors(error.response.status, error.response.data))
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
        dispatch(registrationRequestSuccess())
        dispatch(loginRequestSuccess(response.data))
        dispatch(userRequestSuccess(response.data.user))
        dispatch(push('/'))
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

export function userUpdateAction(data) {
  return (dispatch, getState) => {
    axios
      .patch(USER_URL, data)
      .then(response => {
        dispatch(userRequestSuccess(response.data))
      })
      .catch(error => {
        dispatch(userRequestError())
        dispatch(updateErrors(error.response.status, error.response.data))
      })
  }
}

export function getUserAction(location = '') {
  return (dispatch, getState) => {
    verify =>
      dispatch(verifyJWT(location)).then(verfied => {
        if (verfied && Object.keys(getState().user).length === 0) {
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

export function postListRequestSuccess(data) {
  return {
    type: POST_LIST_REQUEST_SUCCESS,
    data: data
  }
}

export function postListRequestError() {
  return {
    type: POST_LIST_REQUEST_ERROR
  }
}

export function postListOptionsRequestSuccess(data) {
  return {
    type: POST_LIST_OPTIONS_REQUEST_SUCCESS,
    data: data
  }
}

export function postListOptionsRequest() {
  return (dispatch, getState) => {
    axios
      .options(POSTS_URL)
      .then(response => {
        dispatch(
          postListOptionsRequestSuccess(
            response.data.actions.POST.category.choices
          )
        )
      })
      .catch(error => {
        dispatch(updateErrors(error.response.status, error.response.data))
      })
  }
}

export function postListRequest() {
  return dispatch => {
    axios
      .get(POSTS_URL)
      .then(response => {
        dispatch(postListRequestSuccess(response.data))
        dispatch(postListOptionsRequest())
      })
      .catch(error => {
        state =>
          dispatch(postListRequestError()).then(() => {
            errors =>
              dispatch(updateErrors(error.response.status, error.response.data))
          })
      })
  }
}

export function postRequestSuccess(data) {
  return {
    type: POST_REQUEST_SUCCESS,
    data: data
  }
}

export function postRequestError() {
  return {
    type: POST_REQUEST_ERROR
  }
}

export function postRequest(postUrl) {
  return dispatch => {
    axios
      .get(postUrl)
      .then(response => {
        dispatch(postRequestSuccess(response.data))
      })
      .catch(error => {
        dispatch(postRequestError())
        dispatch(updateErrors(error.response.status, error.response.data))
      })
  }
}

export function postClear() {
  return {
    type: POST_CLEAR
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
        dispatch(emailConfirmationRequestError())
        dispatch(updateErrors(error.response.status, error.response.data))
      })
  }
}

export function passwordUpdatetRequest() {
  return {
    type: PASSWORD_UPDATE_REQUEST
  }
}

export function passwordUpdateRequestSuccess(data) {
  return {
    type: PASSWORD_UPDATE_REQUEST_SUCCESS
  }
}

export function passwordUpdateRequestError() {
  return {
    type: PASSWORD_UPDATE_REQUEST_ERROR
  }
}

export function passwordUpdateAction(data) {
  return (dispatch, getState) => {
    dispatch(passwordUpdatetRequest())
    axios
      .post(PASSWORD_UPDATE_URL, data)
      .then(response => {
        dispatch(passwordUpdateRequestSuccess())
      })
      .catch(error => {
        dispatch(passwordUpdateRequestError())
        dispatch(updateErrors(error.response.status, error.response.data))
      })
  }
}

export function passwordResetRequest() {
  return {
    type: PASSWORD_RESET_REQUEST
  }
}

export function passwordResetRequestSuccess(data) {
  return {
    type: PASSWORD_RESET_REQUEST_SUCCESS
  }
}

export function passwordResetRequestError() {
  return {
    type: PASSWORD_RESET_REQUEST_ERROR
  }
}

export function passwordResetAction(data) {
  return (dispatch, getState) => {
    dispatch(passwordResetRequest())
    axios
      .post(PASSWORD_RESET_URL, data)
      .then(response => {
        dispatch(passwordResetRequestSuccess())
        dispatch(logoutAction())
      })
      .catch(error => {
        dispatch(passwordResetRequestError())
        dispatch(updateErrors(error.response.status, error.response.data))
      })
  }
}

export function passwordResetConfirmRequest() {
  return {
    type: PASSWORD_RESET_CONFIRM_REQUEST
  }
}

export function passwordResetRequestConfirmSuccess(data) {
  return {
    type: PASSWORD_RESET_CONFIRM_REQUEST_SUCCESS
  }
}

export function passwordResetConfirmRequestError() {
  return {
    type: PASSWORD_RESET_CONFIRM_REQUEST_ERROR
  }
}

export function passwordResetConfirmAction(data) {
  return (dispatch, getState) => {
    dispatch(passwordResetConfirmRequest())
    axios
      .post(PASSWORD_RESET_CONFIRM_URL, data)
      .then(response => {
        dispatch(passwordResetRequestConfirmSuccess())
      })
      .catch(error => {
        dispatch(passwordResetConfirmRequestError())
        dispatch(updateErrors(error.response.status, error.response.data))
      })
  }
}
