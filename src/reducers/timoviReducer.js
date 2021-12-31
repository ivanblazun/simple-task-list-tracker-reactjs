import {
  POZOVI_TIMOVE,
  DODAJ_TIM,
  IZBRISI_TIM,
  IZMJENI_TIM,
  TIMOVI_ERROR
} from '../actions/types'

const initialState = {
  timovi: null,
  current: null,
  loading: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case POZOVI_TIMOVE:

      return {
        ...state,
        timovi: action.payload,
      }
    default:
      return state;
  }

}