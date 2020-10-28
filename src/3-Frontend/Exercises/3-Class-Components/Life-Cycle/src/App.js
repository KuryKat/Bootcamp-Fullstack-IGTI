import React, { Component } from 'react'
import SwitchButton from './components/SwitchButton/SwitchButton'
import Users from './components/Users/Users'
import users from './users'

export default class App extends Component {
    constructor() {
        super()

        this.state = {
            users: [],
            showUsers: false,
        }
    }

    async componentDidMount() {
        console.log('componentDidMount de App.js')
        const json = users

        // const res = await fetch(
        //     'https://randomuser.me/api/?seed=rush&nat=br&results=10'
        // )
        // const json = res.json()

        this.setState({
            users: json.results,
        })
    }

    componentDidUpdate() {
        console.log('componentDidUpdate de App.js')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount de App.js')
    }

    handleShowUsers = isChecked => {
        this.setState({
            showUsers: isChecked,
        })
    }

    render() {
        const { showUsers, users } = this.state
        return (
            <div className="flex-center">
                <h3>React LifeCycle</h3>
                <SwitchButton
                    description="Mostrar Usuários:"
                    enabled={showUsers}
                    onToggle={this.handleShowUsers}
                />
                {showUsers && <Users users={users} />}
            </div>
        )
    }
}
