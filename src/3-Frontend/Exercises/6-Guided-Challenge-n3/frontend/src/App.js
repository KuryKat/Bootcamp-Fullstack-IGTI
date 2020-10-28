import React, { Component } from 'react'
import Candidates from './components/Candidates/Candidates'
import Header from './components/Header/Header'
import Preloader from './components/Preloader/Preloader'

export default class App extends Component {
    constructor() {
        super()

        this.state = {
            candidates: [],
            previousVotes: [],
            previousPercentages: [],
        }
        this.interval = null
    }

    componentDidMount() {
        this.interval = setInterval(async () => {
            const res = await fetch('http://localhost:8080/votes')
            const { candidates } = await res.json()
            const previousVotes = this.state.candidates.map(({ id, votes }) => {
                return { id, votes }
            })
            const previousPercentages = this.state.candidates.map(
                ({ id, percentage }) => {
                    return { id, percentage }
                }
            )
            this.setState({ candidates, previousVotes, previousPercentages })
        }, 1000)

        setTimeout(() => {
            document.title = 'Desafio 03'
        }, 900)
    }

    render() {
        const { candidates, previousVotes, previousPercentages } = this.state

        if (candidates.length < 1) {
            return <Preloader description="Carregando..." />
        }
        return (
            <div className="container">
                <Header>Votação</Header>
                <Candidates
                    previousPercentages={previousPercentages}
                    previousVotes={previousVotes}
                    candidates={candidates}
                />
            </div>
        )
    }
}
