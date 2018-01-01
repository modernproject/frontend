import { UPDATE_ERRORS, CLEAR_ERRORS } from '../actions'

export default function errors(
  state = {
    status: null,
    fields: {}
  },
  action
) {
  switch (action.type) {
    case UPDATE_ERRORS:
      return {
        ...state,
        status: action.status,
        fields: action.fields
      }
    case CLEAR_ERRORS:
      return {
        status: null,
        fields: {}
      }
    default:
      return state
  }
}
