import React, { useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { pozoviUlogiranog } from '../../actions/korisnikActions'

const PrivateRoute = (
  { component: Component,
    korisnik: { korisnik },
    pozoviUlogiranog,
    ...rest }) => {

  useEffect(() => {
    pozoviUlogiranog()
  }, [])

  return (
    <Route render={props => korisnik < 1 ?
      <Redirect to='/login' />
      :
      <Component {...props} />
    } />
  )
}

const mapStateToProps = (state) => ({
  korisnik: state.korisnik
})

export default connect(mapStateToProps, { pozoviUlogiranog })(PrivateRoute)
