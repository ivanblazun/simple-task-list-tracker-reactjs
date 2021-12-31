import React from 'react'
import { Link } from 'react-router-dom'

const DodajNoviNalog = () => {
  return (
    <div>
      <button className='btn btn-success sm App-logo '
        style={{ backgroundColor: 'white' }}
      >
        <Link to='/novinalog'>
          <i className='.App-logo fas fa-plus'>  dodaj novi nalog..?</i>

        </Link>
      </button>
    </div>
  )
}

export default DodajNoviNalog
