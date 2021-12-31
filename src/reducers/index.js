import { combineReducers } from 'redux';
import naloziReducer from './naloziReducer';
import timoviReducer from './timoviReducer'
import ulogiraniReducer from './ulogiraniReducer'


export default combineReducers({
  nalog: naloziReducer,
  tim: timoviReducer,
  korisnik: ulogiraniReducer
})