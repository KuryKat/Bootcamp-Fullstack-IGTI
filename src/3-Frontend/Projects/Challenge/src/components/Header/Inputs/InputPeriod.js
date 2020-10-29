import React from 'react'

export default function InputPeriod({ period, handle }) {
    const handlePeriod = ({ target: { value } }) => {
        handle(parseInt(value))
    }

    return (
        <div>
            <label htmlFor="period">Período</label>

            <input
                id="period"
                type="number"
                min="1"
                max="36"
                value={period}
                onChange={handlePeriod}
            />
        </div>
    )
}
