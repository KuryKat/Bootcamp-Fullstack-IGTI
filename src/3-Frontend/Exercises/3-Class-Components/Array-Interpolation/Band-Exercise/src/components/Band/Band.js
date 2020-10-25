import React, { Component } from 'react'
import css from './Band.module.css'

export default class Band extends Component {
    constructor() {
        super()
        this.state = {
            bandName: 'VOCALOID',
            bandMembers: [
                {
                    id: 1,
                    name: 'Mitchie M',
                    instrument: 'Hatsune Miku',
                },
                {
                    id: 2,
                    name: 'GIGA',
                    instrument: 'Kagamine Rin',
                },
                {
                    id: 3,
                    name: 'DECO*27',
                    instrument: 'Megurine Luka',
                },
            ],
        }
    }

    render() {
        const { bandName, bandMembers } = this.state
        const {
            band,
            bandName: bandNameStyle,
            bandMembers: bandMembersStyle,
        } = css
        return (
            <div className={band}>
                <h3 className={bandNameStyle}>{bandName}</h3>
                <h5>Members:</h5>
                <div className={bandMembersStyle}>
                    {bandMembers.map(({ id, name, instrument }) => {
                        return (
                            <ul key={id}>
                                <li>Name: {name}</li>
                                <li>Instrument: {instrument}</li>
                            </ul>
                        )
                    })}
                </div>
            </div>
        )
    }
}
