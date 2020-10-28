import React from 'react'
import InputInitialInvest from './InputInitialInvest'
import InputInterest from './InputInterest'
import InputPeriod from './InputPeriod'
import css from './header.module.css'

export default function Header({ handles, state }) {

  const [initialInvest, interest, period] = state
  const [handleInvest, handleInterest, handlePeriod] = handles

  return (
    <div>
      <h3>React - Juros compostos </h3>
      <div className={css.header}>
        <div className={css.inputs}>
          <InputInitialInvest invest={initialInvest} handle={handleInvest} />
        </div>
        <div className={css.inputs}>
          <InputInterest interest={interest} handle={handleInterest} />

        </div>
        <div className={css.inputs}>

          <InputPeriod period={period} handle={handlePeriod} />
        </div>

      </div>
    </div>
  )
}
