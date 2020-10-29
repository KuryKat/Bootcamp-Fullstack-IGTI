import React from 'react'
import InputInitialInvest from './Inputs/InputInitialInvest'
import InputInterest from './Inputs/InputInterest'
import InputPeriod from './Inputs/InputPeriod'
import { header, inputs } from './Header.module.css'

export default function Header({ handles, state }) {
    const [initialInvest, interest, period] = state
    const [handleInvest, handleInterest, handlePeriod] = handles

    return (
        <div>
            <h3>React - Juros compostos </h3>
            <div className={header}>
                <div className={inputs}>
                    <InputInitialInvest
                        invest={initialInvest}
                        handle={handleInvest}
                    />
                </div>
                <div className={inputs}>
                    <InputInterest
                        interest={interest}
                        handle={handleInterest}
                    />
                </div>
                <div className={inputs}>
                    <InputPeriod period={period} handle={handlePeriod} />
                </div>
            </div>
        </div>
    )
}
