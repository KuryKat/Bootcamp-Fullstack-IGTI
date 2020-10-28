import React from 'react'

export function IncrementButton(props) {
    const handleButtonClick = () => {
        const { onIncrement } = props
        onIncrement('+')
    }

    return (
        <button
            onClick={handleButtonClick}
            className="waves-effect waves-light btn green darken-4"
        >
            +
        </button>
    )
}
