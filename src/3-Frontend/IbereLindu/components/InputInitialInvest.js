import React from 'react'

export default function InputInitialInvest({ invest, handle }) {

  const handleInvest = (event) => {
    handle(parseInt(event.target.value))
  }

  return (
    <div>
      <label htmlFor='initialInves'>Investimento Inicial</label>

      <input
        id='initialInves'
        type="number"
        min='1000'
        value={invest}
        step='100'
        onChange={handleInvest} />
    </div>
  )
}
