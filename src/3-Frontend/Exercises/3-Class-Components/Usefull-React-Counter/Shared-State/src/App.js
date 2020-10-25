import React, { Component, Fragment } from 'react'
import Counter from './components/Counter/Counter'

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            currentCounter: 2,
            steps: 0,
        }
    }
    handleButtonClick = clickType => {
        const { currentCounter, steps } = this.state
        this.setState({
            currentCounter:
                clickType === '+' ? currentCounter + 1 : currentCounter - 1,
            steps: steps + 1,
        })
    }
    render() {
        const { currentCounter, steps } = this.state
        return (
            <Fragment>
                <Counter
                    onCount={this.handleButtonClick}
                    value={currentCounter}
                    currentStep={steps}
                />
                <Counter
                    onCount={this.handleButtonClick}
                    value={currentCounter}
                    currentStep={steps}
                />
                <Counter
                    onCount={this.handleButtonClick}
                    value={currentCounter}
                    currentStep={steps}
                />
            </Fragment>
        )
    }
}
