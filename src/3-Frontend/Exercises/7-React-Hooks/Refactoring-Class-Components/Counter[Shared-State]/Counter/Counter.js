import React from 'react'
import css from './Counter.module.css'
import { DecrementButton } from './DecrementButton'
import { IncrementButton } from './IncrementButton'
import { Steps } from './Steps'
import { Value } from './Value'

export default function Counter(props) {
    const handleButtonClick = clickType => {
        const { onCount } = props
        onCount(clickType)
    }

    const { value, currentStep } = props
    return (
        <div className={css.counterContainer}>
            <DecrementButton onDecrement={handleButtonClick} />
            <Value value={value} />
            <IncrementButton onIncrement={handleButtonClick} />
            <Steps currentStep={currentStep} />
        </div>
    )
}
