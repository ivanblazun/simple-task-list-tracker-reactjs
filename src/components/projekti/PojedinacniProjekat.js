import React from 'react'

import { connect } from 'react-redux'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import { izbrisiNalog } from '../../actions/naloziActions'
import axios from 'axios'

import IzmjeniNalog from './IzmjeniProjekt';

const PojedinacniProjekat = ({ projekat, showAlert, izbrisiNalog }) => {
  const [timovi, setTimovi] = useState([])

  useEffect(async () => {
    const res = await axios.get('http://localhost:5000/timovi')
    setTimovi(res.data)
  }, [])


  let { id, operacija, tim, izvrseno, RN } = projekat
  timovi.forEach((Tim) => {
    if (Tim.trenutniRN === RN) {
      tim = Tim.imeTima
      operacija = Tim.zadatakTima
    } else if (Tim.trenutniRN !== RN) {
      tim = tim;
      operacija = operacija
    }
  })


  const izbrisiTajNalog = () => {
    izbrisiNalog(id)
    showAlert()
    window.location.reload();
  }

  return (
    <Router>
      <div className="col-sm-6 onHover" style={{ padding: '0.5rem' }}>
        <li className='list-group-item' style={!izvrseno ?
          { width: 'auto', backgroundColor: '#d44e60' } : { width: 'auto', backgroundColor: '#5de3bd' }}>
          <span className="badge badge-primary" style={{ fontSize: '1.2rem' }}>Rn: {RN}</span>
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
          <Switch>
            <Route exact path={'/izmjeninalog/:id'} >
              <IzmjeniNalog projekat={projekat} />
            </Route>
          </Switch>
          <button className='btn btn-primary btn-sm'
            onClick={izbrisiTajNalog}
            style={{ cursor: 'pointer' }}
            data-toggle="modal" data-target="#exampleModal"
          >
            <i className='fas fa-trash-alt'></i>
          </button>
          <button className='btn btn-warning btn-sm'
            style={{ margin: '0.5rem', cursor: 'pointer' }}
          >
            <Link to={{
              pathname: `/izmjeninalog/${id}`,
              state: projekat
            }}><i className='fas fa-pencil-alt' /></Link>
          </button>
        </li>
      </div>
    </Router>
  )
};

export default connect(null, { izbrisiNalog })(PojedinacniProjekat)
