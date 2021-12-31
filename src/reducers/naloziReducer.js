import {
  POZOVI_NALOGE,
  NALOZI_ERROR,
  TRAZI_NALOGE,
  IZBRISI_NALOG,
  DODAJ_NALOG,
  AZURIRAJ_NALOG
} from '../actions/types'


const initialState = {
  nalozi: null,
  current: null,
  loading: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case AZURIRAJ_NALOG:
      return {
        ...state,
        nalozi: action.payload
      }
    case POZOVI_NALOGE:
      return {
        ...state,
        nalozi: action.payload,
      }
    case DODAJ_NALOG:
      console.log(action.payload)
      return {
        ...state,
        nalozi: [...state.nalozi, action.payload]
      }
    case IZBRISI_NALOG:
      console.log(action.payload)
      return {
        ...state,
        nalozi: [...state.nalozi, action.payload]
      }
    case NALOZI_ERROR:
      console.log(action.payload)
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }

}