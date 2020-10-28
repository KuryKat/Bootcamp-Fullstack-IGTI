import React from 'react'

export default function InputPeriod({ period, handle }) {

  const handlePeriod = (event) => {
    handle(parseInt(event.target.value))
  }

  return (
    <div>
      <label htmlFor='period'>Período</label>

      <input
        id='period'
        type="number"
        min='1'
        max='36'
        value={period}
        onChange={handlePeriod} />
    </div>
  )
}