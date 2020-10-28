import React, { useEffect, useState } from 'react'
import User from '../User/User'

export default function Users({ users }) {
    const [secondsVisible, setSecondsVisible] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setSecondsVisible(secondsVisible + 1)
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [secondsVisible])

    return (
        <div>
            <div>Componente Users Visível por: {secondsVisible} segundos</div>
            <div>
                <h4>
                    <strong>Users:</strong>
                </h4>
            </div>
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
