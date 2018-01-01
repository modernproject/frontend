import { UPDATE_SIDEBAR, UPDATE_DROPDOWN } from '../actions'

const tablet = window.matchMedia('(min-width: 50rem)')

export default function global(
  state = {
    displayDropDown: false,
    displaySideBar: tablet.matches
  },
  action
) {
  switch (action.type) {
    case UPDATE_SIDEBAR:
      return {
        ...state,
        displaySideBar: !state.displaySideBar
      }
    case UPDATE_DROPDOWN:
      return {
        ...state,
        displayDropDown: !state.displayDropDown
      }
    default:
      return state
  }
}
