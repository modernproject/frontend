import { UPDATE_SIDEBAR, UPDATE_DROPDOWN } from '../actions'

export default function global(
  state = {
    displayDropDown: false
  },
  action
) {
  switch (action.type) {
    case UPDATE_DROPDOWN:
      return {
        ...state,
        displayDropDown: !state.displayDropDown
      }
    default:
      return state
  }
}
