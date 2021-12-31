import React from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import IzmjeniTim from './IzmjeniTim';
import { useState } from 'react';
import { useEffect } from 'react';


export const TimItem = (props) => {


  const { id, imeTima, zadatakTima, brojTima, trenutniRN } = props.tim

  const podaci = props.tim

  const [projekat, setProjekat] = useState([])


  useEffect(async () => {
    const res = await axios.get('http://localhost:5000/projekti')
    setProjekat(res.data)
  }, [])


  let { Pid, Poperacija, Ptim, Pizvrseno, PRN } = projekat
  projekat.forEach((Pr) => {
    if (Pr.PRN === trenutniRN) {
      imeTima = Pr.Ptim
      zadatakTima = Poperacija
    }
    // } else if (Tim.trenutniRN !== RN) {
    //   tim = tim;
    //   operacija = operacija
    // }
  })

  const izbrisiTim = async () => {
    await axios.delete(`http://localhost:5000/timovi/${brojTima}`)
    window.location.reload()
  }

  return (
    <Router>
      <div className='col-sm-6 onHover' style={{ padding: '0.5rem' }}>
        <li className="list-group-item" style={{ width: 'auto', border: '2px solid #3295a8' }}>
          <div style={{ padding: '1rem' }}>
            <h3>
              {imeTima}

            </h3>
            <p>
              <span className="badge badge-primary" >Broj tima:{' '}
                <span className='badge badge-light' >{brojTima}</span>
              </span>
            </p>
            <div style={{ border: 'solid 2px  #3295a8' }}>
              <p>
                Zadatak: {zadatakTima}
              </p>
            </div>
            <p className="badge badge-success" style={{ margin: '1rem' }}>
              Trenutno na RN:{' '}
              <span className='badge badge-light'>{trenutniRN}</span>
            </p>
            <Switch>
              <Route exact path={'/izmjenitim/:id'} >
                <IzmjeniTim podaci={podaci} />
              </Route>
            </Switch>
          </div>
          <Link className='btn btn-sm btn-info onHover' style={{ margin: '1rem' }}
            to={{
              pathname: `/izmjenitim/${id}`,
              state: podaci
            }} >Izmjeni tim
          </Link>
          <button className='btn btn-sm btn-danger onHover' style={{ margin: '1rem' }}
            onClick={izbrisiTim}
          >
            Ukloni Tim
          </button >
        </li >
      </div >
    </Router>
  )
}
