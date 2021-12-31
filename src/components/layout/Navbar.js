import React, { useEffect, Fragment } from 'react'
import logo from './frigo-logo.png'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

import { pozoviUlogiranog } from '../../actions/korisnikActions'

const Navbar = ({ korisnik: { korisnik }, pozoviUlogiranog }) => {

  useEffect(async () => {
    pozoviUlogiranog()
  }, [])

  const ostaleIkone = <Fragment>
    <li className='nav-item onHover'>
      <Link className='nav-link fas fa-list' to="/glavnalista"> Lista</Link>
    </li>
    <li className='nav-item onHover'>
      <Link className='nav-link fas fa-copy' to="/nalozi"> Nalozi</Link>
    </li>
    <li className='nav-item onHover'>
      <Link className='nav-link fas fa-users' to="/svitimovi"> Timovi</Link>
    </li>
    <li className='nav-item onHover'>
      <Link className='nav-link fas fa-sign-out' to="/logout"> Odlogiraj se</Link>
    </li>
  </Fragment>

  const logIkone = <Fragment>
    <div className="d-inline-flex justify-content-around">
      <div className='d-flex flex-row'>
        <ul className='navbar-nav align-self-center'>
          <li className='nav-item onHover'>
            <Link className='nav-link fas fa-user' to="/login"> Ulogiraj se</Link>
          </li>
          <li className='nav-item onHover'>
            <Link className='nav-link fas fa-user-plus' to="/register"> Registriraj korisnika</Link>
          </li>
        </ul>
      </div>
    </div>
  </Fragment>

  return (
    <nav className='navbar navbar-expand-sm navbar-light' style={style}>
      <a href="http://www.frigo-plus.hr/en/homepage/" target='_blank'>
        <img className='navbar-brand App-logo' src={logo} alt="" style={{ width: '10rem' }} />
      </a>
      <div className="d-inline-flex justify-content-around">
        <div className='d-flex flex-row'>
          <ul className='navbar-nav align-self-center'>
            <li className='nav-item onHover'>
              <Link className='nav-link fas fa-home' to="/"> Home</Link>
            </li>
            {korisnik < 1 ? logIkone : ostaleIkone}
          </ul>
        </div>
      </div>
    </nav>
  )
}

const style = {
  backgroundColor: '#7aa5eb',
  border: '2px grey solid',
  height: '5.6rem',
}

const mapStateToProps = (state) => ({
  korisnik: state.korisnik
})

export default connect(mapStateToProps, { pozoviUlogiranog })(Navbar)
