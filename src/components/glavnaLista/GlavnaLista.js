import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { useEffect } from 'react'

import { pozoviNaloge } from '../../actions/naloziActions'
import { pozoviTimove } from '../../actions/timoviActions'

import ListaItem from './ListaItem'

const GlavnaLista = ({ nalozi: { nalozi }, timovi: { timovi }, pozoviNaloge, pozoviTimove }) => {

  useEffect(() => {

    pozoviNaloge()
    pozoviTimove()

  }, [])

  return (

    <div className='container'>
      <h3>Glavna Lista naloga</h3>
      <table className='table text-center'>
        <thead>
          <tr>
            <th>Broj Radnog naloga</th>
            <th>Tim</th>
            <th>Zadatak</th>
            <th>Stanje razvoja</th>
          </tr>
        </thead>
        <tbody>
          {nalozi === null ?
            (<p className='self-center'>Pozivam naloge......</p>) :
            (nalozi.map((nalog) =>
              <ListaItem key={nalog.id} nalog={nalog} />
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

const mapStateToProps = (state) => ({
  nalozi: state.nalog,
  timovi: state.tim
})

export default connect(mapStateToProps, { pozoviNaloge, pozoviTimove })(GlavnaLista)
