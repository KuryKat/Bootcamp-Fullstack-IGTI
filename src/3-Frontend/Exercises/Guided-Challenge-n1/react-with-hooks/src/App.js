import React, { useEffect, useState } from 'react'
import { getDate } from './utils/getDate'

export default function App() {
    const [clickArray, setClickArray] = useState([])
    useEffect(() => {
        document.title = clickArray.length.toString()
    })

    const handleClick = () => {
        const newClickArray = Object.assign([], clickArray)
        newClickArray.push(getDate())
        setClickArray(newClickArray)
    }

    return (
        <div>
            <h2>
                React usando <em>Hooks</em>
            </h2>
            <button onClick={handleClick}>Clique-me!</button>

            <ul>
                {clickArray.map(item => {
                    return <li key={item}>{item}</li>
                })}
            </ul>
        </div>
    )
}
