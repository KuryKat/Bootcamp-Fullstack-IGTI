import React, { Fragment, useState } from 'react'
import Band from './components/Band/Band'
import Counter from './components/Counter[Single-State]/Counter'
import Counter2 from './components/Counter[Shared-State]/Counter'

export default function App() {
    const [currentCounter, setCurrentCounter] = useState(2)
    const [steps, setSteps] = useState(0)

    const handleButtonClick = clickType => {
        setCurrentCounter(
            clickType === '+' ? currentCounter + 1 : currentCounter - 1
        )
        setSteps(steps + 1)
    }

    return (
        <Fragment>
            <Band />
            <hr />
            <center>
                <h2>Counter</h2>
                <Counter />
                <Counter />
                <Counter />
                <hr />
                <h2>Counter 2</h2>
                <Counter2
                    onCount={handleButtonClick}
                    value={currentCounter}
                    currentStep={steps}
                />
                <Counter2
                    onCount={handleButtonClick}
                    value={currentCounter}
                    currentStep={steps}
                />
                <Counter2
                    onCount={handleButtonClick}
                    value={currentCounter}
                    currentStep={steps}
                />
            </center>
        </Fragment>
    )
}
