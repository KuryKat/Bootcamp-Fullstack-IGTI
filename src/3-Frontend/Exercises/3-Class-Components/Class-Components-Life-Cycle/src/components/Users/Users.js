import React, { Component } from 'react'
import User from '../User/User'

export default class Users extends Component {
    constructor() {
        super()

        this.state = {
            secondsVisible: 0,
        }

        this.interval = null
    }

    componentDidMount() {
        console.log('componentDidMount de Users.js')

        this.interval = setInterval(() => {
            const { secondsVisible } = this.state
            this.setState({
                secondsVisible: secondsVisible + 1,
            })
        }, 1000)
    }

    componentDidUpdate() {
        console.log('componentDidUpdate de Users.js')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount de Users.js')
        clearInterval(this.interval)
    }

    render() {
        const { users } = this.props
        const { secondsVisible } = this.state
        return (
            <div>
                <center>
                    <div>
                        Componente Users Visível por: {secondsVisible} segundos
                    </div>
                    <div>
                        <h4>
                            <strong>Users:</strong>
                        </h4>
                    </div>
                </center>
                <ul>
                    {users.map(user => {
                        const {
                            login: { uuid },
                        } = user
                        return (
                            <li key={uuid}>
                                <User user={user} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
