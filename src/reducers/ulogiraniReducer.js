import {
  POZOVI_ULOGIRANOG,
  ULOGIRANI_ERROR,
  IZBRISI_ULOGIRANOG,
  POSTAVI_ULOGIRANOG
} from '../actions/types'

const initialState = {
  korisnik: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case POZOVI_ULOGIRANOG:
      return {
        ...state,
        korisnik: action.payload
      }
    default:
      return state
  }
}