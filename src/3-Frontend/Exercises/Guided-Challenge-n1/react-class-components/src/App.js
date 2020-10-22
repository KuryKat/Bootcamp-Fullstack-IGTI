import React, { Component } from 'react'
import { getDate } from './utils/getDate'

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            clickArray: [],
        }
    }

    handleClick = () => {
        const newClickArray = Object.assign(this.state.clickArray)
        newClickArray.push(getDate())

        this.setState({ clickArray: newClickArray })
    }

    componentDidUpdate() {
        document.title = this.state.clickArray.length.toString()
    }

    render() {
        const { clickArray } = this.state
        return (
            <div>
                <h2>
                    React com <em>Class Components</em>
                </h2>
                <button onClick={this.handleClick}>Clique-me!</button>

                <ul>
                    {clickArray.map(item => {
                        return <li key={item}>{item}</li>
                    })}
                </ul>
            </div>
        )
    }
}
