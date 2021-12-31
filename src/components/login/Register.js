import React, { useState } from 'react'
import axios from 'axios'

const Register = () => {

  const [korisnik, setKorisnik] = useState({
    imeKorisnika: '',
    password: '',
    password2: ''
  })

  const { imeKorisnika, password, password2 } = korisnik

  const onChange = (e) => {

    setKorisnik({ ...korisnik, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (password !== password2) {
      window.alert('Netocno upisani podaci!')
      setKorisnik({
        imeKorisnika: '',
        password: '',
        password2: ''
      })
    } else if (imeKorisnika, password, password2 === '') {
      window.alert('Popuni sva polja!')
    }
    else {
      console.log(korisnik)
      stvoriKorisnika(korisnik)
      window.alert(`Korisnik registriran!`)
    }
    setKorisnik({
      imeKorisnika: '',
      password: '',
      password2: ''
    })
  }

  const stvoriKorisnika = async (korisnik) => {
    await axios.post('http://localhost:5000/korisnici', korisnik)
  }

  return (
    <div className='container'>
      <h1>
        Registracija <span className="text-primary">Korisnika</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Ime</label>
          <input className='form-control form-control-sm'
            type="text"
            name='imeKorisnika'
            value={imeKorisnika}
            onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Sifra</label>
          <input className='form-control form-control-sm'
            type="password"
            name='password'
            value={password}
            onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password2">Potvrdi Sifru</label>
          <input className='form-control form-control-sm'
            type="password"
            name='password2'
            value={password2}
            onChange={onChange} />
        </div>
        <input type="submit" value='Registracija' className='btn btn-primary btn-block' />
      </form>
    </div>
  )
}

export default Register
