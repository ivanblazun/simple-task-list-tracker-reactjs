import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { connect } from 'react-redux';

// Akcije
import { pozoviNaloge } from './actions/naloziActions';
import { azurirajNalog } from './actions/naloziActions';

// Komponente
import Navbar from './components/layout/Navbar';
import SviProjekti from './components/projekti/SviProjekti';
import NoviNalog from './components/layout/NoviNalog';
import IzmjeniNalog from './components/projekti/IzmjeniProjekt';
import HomePage from './components/layout/pages/HomePage';
import SviTimovi from './components/timovi/SviTimovi';
import NoviTim from './components/timovi/NoviTim';
import IzmjeniTim from './components/timovi/IzmjeniTim';
import GlavnaLista from './components/glavnaLista/GlavnaLista';
import Register from './components/login/Register';
import Login from './components/login/Login'
import Logout from './components/login/Logout';
import PrivateRoute from './components/routing/PrivateRoute';

const App = ({ nalozi: { nalozi }, pozoviNaloge, azurirajNalog }) => {


  useEffect(() => {
    pozoviNaloge()
  }, [])

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <br />
            <Route exact path='/'><HomePage /></Route>
            <Switch>
              <PrivateRoute exact path='/nalozi' component={
                SviProjekti
                // <SviProjekti
                //   nadeniProjekat={nadeniProjekat}
                //   IzmjeniProjekatU={IzmjeniProjekatU}
                //   postaviPoRN={postaviPoRN}
                //   pozoviSveProjekte={pozoviNaloge}
                // />
              } />
              <PrivateRoute exact path='/glavnalista' component={GlavnaLista} />
              <PrivateRoute exact path='/svitimovi' component={SviTimovi} />
              <Route exact path='/novinalog' ><NoviNalog /></Route>
              <Route exact path='/izmjeninalog'>
                <IzmjeniNalog azurirajNalog={azurirajNalog}
                />
              </Route>
              <Route exact path='/novitim'>
                <NoviTim />
              </Route>
              <Route exact path='/izmjenitim/:id'><IzmjeniTim /></Route>
              <Route exact path='/register'><Register /></Route>
              <Route exact path='/login'><Login /></Route>
              <Route exact path='/logout'> <Logout /></Route>
            </Switch>
          </div>
        </div>
      </Router >
    </Provider>
  );

}

const mapStateToProps = (state) => ({
  nalozi: state.nalog
})

export default connect(mapStateToProps, { pozoviNaloge, azurirajNalog })(App);
