import React, { useState } from 'react'
import {
    band,
    bandName as bandNameStyle,
    bandMembers as bandMembersStyle,
} from './Band.module.css'

const band_Members = [
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
]

export default function Band() {
    const [bandName, setBandName] = useState('VOCALOID')
    const [bandMembers, setBandMembers] = useState(band_Members)

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
