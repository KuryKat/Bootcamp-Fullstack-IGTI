import React from 'react'

export default function InputInterest({ interest, handle }) {
    const handleInterest = ({ target: { value } }) => {
        handle(value)
    }

    return (
        <div>
            <label htmlFor="inputInterest">Juros</label>
            <input
                id="inputInterest"
                type="number"
                min="-12"
                max="12"
                step="0.5"
                value={interest}
                onChange={handleInterest}
            />
        </div>
    )
}
