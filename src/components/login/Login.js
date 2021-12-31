import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Login = () => {

  useEffect(async () => {
    await pozoviKorisnike()

    console.log(sviKorisnici)
  }, [])

  const [korisnik, setKorisnik] = useState({
    imeKorisnika: '',
    password: '',
  })

  const { imeKorisnika, password } = korisnik

  const [sviKorisnici, setSviKorisnici] = useState([])

  const onChange = (e) => {
    setKorisnik({ ...korisnik, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    sviKorisnici.forEach((kor) => {
      if (kor.imeKorisnika === imeKorisnika && kor.password === password) {
        window.alert(`Dobrodosao korisnice ${kor.imeKorisnika}`)
        ulogirajKorisnika()
      }
    })
    window.location.reload(false)

    window.location.pathname = './'

    setKorisnik({
      imeKorisnika: '',
      password: '',
    })
  }

  const pozoviKorisnike = async () => {
    const res = await axios.get('http://localhost:5000/korisnici');
    const data = await res.data
    setSviKorisnici(data)
  }

  const ulogirajKorisnika = async () => {
    await axios.post(`http://localhost:5000/ulogiraniKorisnik`, korisnik)
  }

  return (
    <div className='container'>
      <h1>
        Prijava <span className="text-primary">Korisnika</span>
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
        <input type="submit" value='Ulogiraj me..' className='btn btn-primary btn-block' />
      </form>
    </div>
  )
}

export default Login
