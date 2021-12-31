
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import { dodajNalog } from '../../actions/naloziActions';

const NoviNalog = ({ dodajNalog }) => {

  const [operacija, setOperacija] = useState('')
  const [tim, setTim] = useState('')
  const [RN, setRN] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    dodajNalog({ operacija, tim, RN })

    setRN('');
    setOperacija('');
    setTim('');

    window.alert(`Radni nalog ${RN} je dodan!!`)

    e.preventDefault()
  }

  return (
    <div className='container'>
      <button className='btn btn-sm'>
        <Link to='/nalozi'>
          <i className="fas fa-arrow-left"> Nazad na naloge</i>
        </Link>
      </button>
      <form className='add-form' >
        <div className='form-control'>
          <label>Radni nalog:</label>
          <input type="text"
            placeholder='upisi nalog...'
            value={RN}
            onChange={(e) => setRN(e.target.value)} />
        </div>
        <div className='form-control'>
          <label>Dodaj operaciju</label>
          <input type="text"
            placeholder='dodaj operaciju'
            value={operacija}
            onChange={(e) => setOperacija(e.target.value)} />
        </div>
        <div className='form-control'>
          <label>Odaberi tim</label>
          <input type="text"
            placeholder='odaberi tim za operaciju..'
            value={tim}
            onChange={(e) => setTim(e.target.value)} />
        </div>
        <input className='btn btn-block' type="submit" value="save task" onClick={onSubmit} />
      </form>
    </div>
  )
}

NoviNalog.propTypes = {
  dodajNalog: PropTypes.func.isRequired,
}

export default connect(null, { dodajNalog })(NoviNalog)
