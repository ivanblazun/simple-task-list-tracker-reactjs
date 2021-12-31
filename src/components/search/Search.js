import React from 'react'
import { useState } from 'react'

const Search = ({ postaviPoRN }) => {

  const [text, setText] = useState('')

  function onChange(e) {
    setText(e.target.value)
    postaviPoRN(text)
  }

  const ocisti = (() => {
    setText('')
  })

  return (
    <div className="container">
      <div className='row' style={{ margin: '1rem' }}>
        <div className='col-md-8 offset-md-2'>
          <input value={text} type="text"
            placeholder="trazi projekte po RN-logu..."
            className='form-control '
            onChange={onChange}
          />
        </div>
        <button onClick={ocisti}
          className='btn btn-info btn-sm onHover'>
          Ocisti
        </button>
      </div>
    </div>
  )
}

export default Search
