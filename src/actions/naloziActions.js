import {
  POZOVI_NALOGE,
  NALOZI_ERROR,
  TRAZI_NALOGE,
  IZBRISI_NALOG,
  DODAJ_NALOG,
  AZURIRAJ_NALOG
} from './types'
import axios from 'axios'

export const pozoviNaloge = () => async dispatch => {
  try {
    const res = await axios.get('http://localhost:5000/projekti')
    const data = res.data

    dispatch({
      type: POZOVI_NALOGE,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: NALOZI_ERROR,
      payload: err.response.data
    })
  }
};

export const dodajNalog = (nalog) => async dispatch => {
  try {

    const res = await axios.post('http://localhost:5000/projekti', nalog)
    const data = res.data

    dispatch({
      type: DODAJ_NALOG,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: NALOZI_ERROR,
      payload: err.response.data
    })
  }
};

export const izbrisiNalog = (id) => async dispatch => {
  try {
    const res = await axios.delete(`http://localhost:5000/projekti/${id}`)
    const data = res.data

    dispatch({
      type: IZBRISI_NALOG,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: NALOZI_ERROR,
      payload: err.response.data
    })
  }
};

export const azurirajNalog = (nalog) => async dispatch => {
  try {
    const res = await axios.put(`http://localhost:5000/projekti/${nalog.RN}`, nalog)
    const data = res.data

    dispatch({
      type: AZURIRAJ_NALOG,
      payload: data
    })

  } catch (err) {
    dispatch({
      type: NALOZI_ERROR,
      payload: err.response.data
    })
  }

}
