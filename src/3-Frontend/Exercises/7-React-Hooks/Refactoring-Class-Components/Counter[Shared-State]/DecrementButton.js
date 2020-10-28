import React from 'react'

export function DecrementButton(props) {
    const handleButtonClick = () => {
        const { onDecrement } = props
        onDecrement('-')
    }

    return (
        <button
            onClick={handleButtonClick}
            className="waves-effect waves-light btn red darken-4"
        >
            -
        </button>
    )
}
