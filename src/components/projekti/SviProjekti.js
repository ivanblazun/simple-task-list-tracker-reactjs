import React, { useState } from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Fragment } from 'react'


import { pozoviNaloge } from '../../actions/naloziActions'

import PojedinacniProjekat from './PojedinacniProjekat'
import DodajNoviNalog from '../layout/DodajNoviNalog'
import Search from '../search/Search'
import PronadeniProjekat from './PronadeniProjekat'

const SviProjekti = ({
  nalozi: { nalozi },
  pozoviNaloge
}) => {
  useEffect(async () => {
    pozoviNaloge()
  }, [])

  const [nadeniProjekat, setNadeniProjekat] = useState(null)

  const showAlert = () => {
    window.alert('Nalog izbrisan')
  }

  const postaviPoRN = (text) => {
    nalozi.forEach((projekat) => {
      if (projekat.RN === text) {
        setNadeniProjekat(projekat)
      } else if (projekat.RN === '') {
        window.location.reload(false);
      }
    })
  }

  const ocistiTrazilicu = () => {
    setNadeniProjekat('')
  }

  return (
    <Fragment>
      <Search postaviPoRN={postaviPoRN} pozoviSveProjekte={pozoviNaloge} />
      {nadeniProjekat ?
        (<div className='pronadeniProjekti'
          style={stylePronadeni}>
          <h1>Pronadeni projekti</h1>
          <PronadeniProjekat nadeniProjekat={nadeniProjekat} />
          <button onClick={ocistiTrazilicu} className='btn btn-danger btn-sm onHover'>
            Ocisti
          </button>
        </div>) :
        ''}

      <div className='container' style={style}>
        <DodajNoviNalog />
        <ul className='row' style={style}>
          {nalozi === null ?
            (<p className='self-center'>Pozivam naloge......</p>) :
            (nalozi.map((projekat) =>
              <PojedinacniProjekat
                key={projekat.id}
                projekat={projekat}
                showAlert={showAlert}
              />))}
        </ul>
      </div>
    </Fragment >
  )
}

const style = {
  padding: '0.2rem'
}
const stylePronadeni = {
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  border: 'solid 2px black',
  borderRadius: '8px',
  alignItems: 'center',
  alignContent: 'space-center',
  justifyContent: 'center',
  padding: '1rem'
}

SviProjekti.propTypes = {
  nalozi: PropTypes.object.isRequired,
  pozoviNaloge: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  nalozi: state.nalog
})

export default connect(mapStateToProps, { pozoviNaloge })(SviProjekti)
