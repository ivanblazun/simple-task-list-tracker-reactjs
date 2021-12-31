import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { pozoviTimove } from '../../actions/timoviActions';
import { pozoviNaloge } from '../../actions/naloziActions';

import { TimItem } from './TimItem';

const SviTimovi = ({ timovi: { timovi }, nalozi: { nalozi }, pozoviTimove, pozoviNaloge }) => {

  const [nalog, setNalog] = useState([])

  useEffect(async () => {

    pozoviTimove()

    pozoviNaloge()


  }, [])

  return (
    <div className='container'>
      <Link to='novitim'>
        <button className='btn btn-success sm App-logo'
          style={{ margin: '1rem' }}>
          Dodaj tim
        </button >
      </Link>
      <ul className='row'>
        {timovi === null ?
          (<p className='self-center'>Pozivam timove......</p>) :
          (timovi.map((tim) =>
            (<TimItem key={tim.id} tim={tim} />)
          ))}
      </ul >
      {/* <button className='btn btn-lg btn-info onHover' style={{ margin: '1rem' }}>Stvori Tim</button >
      <button className='btn btn-lg btn-danger onHover' style={{ margin: '1rem' }}>Ukloni Tim</button > */}
    </div >
  )
}
const mapStateToProps = (state) => ({
  timovi: state.tim,
  nalozi: state.nalog
})


export default connect(mapStateToProps, { pozoviTimove, pozoviNaloge })(SviTimovi)
