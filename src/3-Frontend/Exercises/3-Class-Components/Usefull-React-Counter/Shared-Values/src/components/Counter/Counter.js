import React, { Component } from 'react'
import css from './Counter.module.css'
import DecrementButton from './DecrementButton'
import IncrementButton from './IncrementButton'
import Steps from './Steps'
import Value from './Value'

export default class Counter extends Component {
    handleButtonClick = clickType => {
        const { onCount } = this.props
        onCount(clickType)
    }

    render() {
        const { value, currentStep } = this.props
        return (
            <div className={css.counterContainer}>
                <DecrementButton onDecrement={this.handleButtonClick} />
                <Value value={value} />
                <IncrementButton onIncrement={this.handleButtonClick} />
                <Steps currentStep={currentStep} />
            </div>
        )
    }
}
