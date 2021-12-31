import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const NoviTim = () => {

  const [imeTima, setImeTima] = useState('')
  const [brojTima, setBrojTima] = useState('')
  const [zadatakTima, setZadatakTima] = useState('')
  const [trenutniRN, setTrenutniRN] = useState('')

  const onSubmit = (e) => {

    e.preventDefault()

    dodajTim({ imeTima, brojTima, zadatakTima, trenutniRN })

    e.preventDefault()
  }

  const dodajTim = async (noviTim) => {

    await axios.post('http://localhost:5000/timovi', noviTim)
  }



  return (
    <div className='container'>
      <button className='btn btn-sm'>
        <Link to='/svitimovi'>
          <i className="fas fa-arrow-left"> Nazad na timove</i>
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
          <label>Broj tima:</label>
          <input type="number"
            placeholder='upisi broj tima...'
            value={brojTima}
            onChange={(e) => setBrojTima(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label>Zadatak:</label>
          <input type="text"
            placeholder='upisi zadatak...'
            value={zadatakTima}
            onChange={(e) => setZadatakTima(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label>Dodjeli RN:</label>
          <input type="number"
            placeholder='upisi broj tima...'
            value={trenutniRN}
            onChange={(e) => setTrenutniRN(e.target.value)}
          />
        </div>
        <input className='btn btn-block' type="submit" value="save task" onClick={onSubmit} />
      </form>
    </div>

  )

}

export default NoviTim
