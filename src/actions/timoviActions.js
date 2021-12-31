import {
  POZOVI_TIMOVE,
  DODAJ_TIM,
  IZBRISI_TIM,
  IZMJENI_TIM,
  TIMOVI_ERROR
} from './types'
import axios from 'axios'

export const pozoviTimove = () => async dispatch => {
  try {
    const res = await axios.get('http://localhost:5000/timovi')
    const data = res.data

    dispatch({
      type: POZOVI_TIMOVE,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: TIMOVI_ERROR,
      payload: err.response.data
    })
  }
};

