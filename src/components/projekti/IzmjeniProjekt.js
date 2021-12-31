
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { azurirajNalog } from '../../actions/naloziActions'
import { connect } from 'react-redux'

const IzmjeniNalog = ({ azurirajNalog }) => {

  const [operacija, setOperacija] = useState('')
  const [izvrseno, setIzvrseno] = useState(false)
  const [tim, setTim] = useState('')
  const [RN, setRN] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    azurirajNalog({ operacija, tim, RN, izvrseno })

    window.alert(`Radni nalog ${RN} izmjenjen!`)
    setRN('');
    setOperacija('');
    setTim('');
    setIzvrseno(false)

    window.location.pathname = '/'
  }

  return (
    <div className='container' style={{ margin: '0.5rem' }}>
      <button className='btn btn-sm' >
        <Link to='/nalozi'>
          <i className="fas fa">Zatvori izmjenu</i>
        </Link>
      </button>
      <br />
      <form className='form-group' style={{ padding: '0.5rem' }}>
        <div className='form-control'>
          <label>Radni nalog:</label>
          <input type="text"
            placeholder={RN}
            value={RN}
            onChange={(e) => setRN(e.target.value)} />
        </div>
        <div className='form-group' style={{ padding: '0.5rem' }}>
          <div className="form-control">
            <label>Dodaj operaciju</label>
            <input type="text"
              placeholder='dodaj operaciju'
              value={operacija}
              onChange={(e) => setOperacija(e.target.value)} />
          </div>
        </div>
        <div className='form-group' style={{ marginBottom: '0.2rem' }}>
          <label >Ime tima:{' '}
            <select name="timovi" id=""
              onChange={(e) => setTim(e.target.value)}>
              <option value='Izaberi tim..'>Izaberi tim</option>
              <option value="Konstruktori">Konstruktori</option>
              <option value="Varioci Bakar">Varioci Bakar</option>
              <option value="Varioci Inox">Varioci Inox</option>
              <option value="Izolateri">Izolateri</option>
              <option value="Elektricari">Elektricari</option>
            </select>
          </label>
        </div>
        <div className='form-group form-control-check' style={{ marginBottom: '0.2rem' }}>
          <label>Izvrseno</label>
          <input type="checkbox"
            checked={izvrseno}
            onChange={(e) => setIzvrseno(e.currentTarget.checked)} />
        </div>
        <input className='btn btn-block'
          type="submit"
          value="save.."
          onClick={onSubmit} >
        </input>
      </form>
    </div>
  )
}

export default connect(null, { azurirajNalog })(IzmjeniNalog)