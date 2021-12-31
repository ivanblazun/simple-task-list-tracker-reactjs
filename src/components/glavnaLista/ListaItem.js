import React from 'react'

const ListaItem = ({ nalog }) => {

  const { id, operacija, tim, izvrseno, RN } = nalog

  const izvrsen = <p style={{ backgroundColor: '#0ced57', fontFamily: 'monospace' }}>Izvrsen</p>
  const neizvrsen = <p style={{ backgroundColor: '#ff0342', fontFamily: 'monospace' }}>Neizvrsen</p>

  return (
    <tr >
      <td>{RN}</td>
      <td>{tim}</td>
      <td>{operacija}</td>
      <td>{izvrseno ? izvrsen : neizvrsen}</td>
    </tr>
  )
}

export default ListaItem
