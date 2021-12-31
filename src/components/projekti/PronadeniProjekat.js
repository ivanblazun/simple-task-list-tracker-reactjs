import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const PronadeniProjekat = ({ nadeniProjekat }) => {
  const { id, operacija, tim, izvrseno, RN } = nadeniProjekat

  const izbrisiNalog = async () => {
    await axios.delete(`http://localhost:5000/projekti/${id}`)
    window.alert(`Nalog radni broj ${RN} izbrisan!!`)
    window.location.reload();
  }

  return (
    <div className="col-sm-6 " style={{ padding: '0.5rem', alignSelf: 'center' }}>
      <li className='list-group-item' style={!izvrseno ?
        { width: 'auto', backgroundColor: '#d44e60' } : { width: 'auto', backgroundColor: '#5de3bd' }}>
        <h3 className="panel-body">Pozicija na listi: </h3>
        <span className="badge badge-primary badge-pill">Rn: {RN}</span>
        <h5>Trenutna operacija: <span>{operacija}</span></h5>
        <h5>Izvodi tim:
          <span className="badge badge-success badge-pill">
            {tim}
          </span>
        </h5>
        <h5>Izvrseno:
          {izvrseno ? <span className="badge badge-success badge-pill">
            Da
          </span> : <span className="badge badge-danger badge-pill">
            Ne
          </span>}
        </h5>
        <button className='btn btn-primary btn-sm'
          onClick={izbrisiNalog}
          style={{ cursor: 'pointer' }}
          data-toggle="modal" data-target="#exampleModal"
        >
          <i className='fas fa-trash-alt'></i>
        </button>
        <button className='btn btn-warning btn-sm' style={{ margin: '0.5rem', cursor: 'pointer' }}>
          <Link to='/izmjeninalog'><i className='fas fa-pencil-alt' /></Link>
        </button>
      </li>
    </div>
  )
}

export default PronadeniProjekat
