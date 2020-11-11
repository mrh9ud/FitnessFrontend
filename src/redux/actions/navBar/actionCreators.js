import { CLEAR_MENU_OPTIONS, SET_MENU_OPTIONS } from "../actionType";

function setMenuOptions(data) { return { type: SET_MENU_OPTIONS, payload: data } }

function clearMenuOptions() { return { type: CLEAR_MENU_OPTIONS } }

export { setMenuOptions, clearMenuOptions }