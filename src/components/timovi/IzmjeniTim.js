import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const IzmjeniTim = ({ podaci }) => {

  const [imeTima, setImeTima] = useState('')
  const [brojTima, setBrojTima] = useState('')
  const [zadatakTima, setZadatakTima] = useState('')
  const [trenutniRN, setTrenutniRN] = useState('')

  const onSubmit = (e) => {

    e.preventDefault()

    izmjeniTim({ imeTima, brojTima, zadatakTima, trenutniRN })

    e.preventDefault()
  }

  const izmjeniTim = async (noviTim) => {
    await axios.put(`http://localhost:5000/timovi/${brojTima}`, noviTim)
  }

  return (
    <div className='container' >
      <button className='btn btn-sm onHover' style={{ margin: '0.5rem' }}>
        <Link to='/svitimovi'>
          <i className="fas fa-close">Zatvori izmjenu</i>
        </Link>
      </button>
      <form className='add-form' >
        <div className='form-control'>
          <label >Ime tima:{' '}
            <select name="timovi" id=""
              onChange={(e) => setImeTima(e.target.value)}>
              <option value='Izaberi tim..'>Izaberi tim</option>
              <option value="Konstruktori">Konstruktori</option>
              <option value="Varioci Bakar">Varioci Bakar</option>
              <option value="Varioci Inox">Varioci Inox</option>
              <option value="Izolateri">Izolateri</option>
              <option value="Elektricari">Elektricari</option>
            </select>
          </label>
        </div>
        <div className='form-control'>
          <label>Novi broj tima:</label>
          <input type="number"
            placeholder={`Trenutni broj tima: ${podaci.brojTima}`}
            onChange={(e) => setBrojTima(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label>Izmjeni zadatak:</label>
          <input type="text"
            placeholder={`Trenutni zadatak: ${podaci.zadatakTima}`}
            onChange={(e) => setZadatakTima(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label>Dodjeli drugi RN:</label>
          <input type="number"
            placeholder={`Trenutni RN: ${podaci.trenutniRN}`}
            onChange={(e) => setTrenutniRN(e.target.value)}
          />
        </div>
        <input className='btn btn-block' type="submit" value="save task" onClick={onSubmit} />
      </form>
    </div>
  )
}

export default IzmjeniTim
