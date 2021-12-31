import React, { useEffect, useState } from 'react'
import axios from 'axios'



const Logout = () => {
  const [ulogiraniKorisnik, setUlogiraniKorisnik] = useState([])

  useEffect(() => {
    pozoviUlogiraneKorisnike()
  }, [])

  const pozoviUlogiraneKorisnike = async () => {
    const res = await axios.get('http://localhost:5000/ulogiraniKorisnik');
    const data = await res.data

    setUlogiraniKorisnik(data)
  }

  const odlogiraj = () => {
    ulogiraniKorisnik.forEach((korisnik) => {

      axios.delete(`http://localhost:5000/ulogiraniKorisnik/${korisnik.id}`)
    })

    window.location.pathname = '/'
  }

  return (
    <div className='container-inline'>
      <h1>Odlogirat ces se  ?</h1>
      <button onClick={odlogiraj} className='btn ntn-danger'>Da</button>
      <hr />
      <button onClick={() => window.location.pathname = '/'} className='btn ntn-danger'>Ne</button>
    </div>
  )
}

export default Logout
