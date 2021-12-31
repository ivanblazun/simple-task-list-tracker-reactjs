import {
  POZOVI_ULOGIRANOG,
  ULOGIRANI_ERROR,
  IZBRISI_ULOGIRANOG,
  POSTAVI_ULOGIRANOG
} from './types'
import axios from 'axios'

export const pozoviUlogiranog = () => async dispatch => {
  try {
    const res = await axios.get('http://localhost:5000/ulogiraniKorisnik')
    const data = res.data
    dispatch({
      type: POZOVI_ULOGIRANOG,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: ULOGIRANI_ERROR,
      payload: err.response.data
    })
  }
};