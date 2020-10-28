import React, { useEffect, useState } from 'react'
import SwitchButton from './components/SwitchButton/SwitchButton'
import Users from './components/Users/Users'
import globalUsers from './users'

export default function App() {
    const [users, setUsers] = useState([])
    const [showUsers, setShowUsers] = useState(false)

    useEffect(() => {
        // ;(async () => {
        //     const res = await fetch(
        //         'https://randomuser.me/api/?seed=rush&nat=br&results=10'
        //     )
        //     const json = await res.json()
        // })()
        const json = globalUsers
        setUsers(json.results)
    }, [])

    const handleShowUsers = isChecked => setShowUsers(isChecked)

    return (
        <div className="container default-flex-column">
            <h3>React LifeCycle</h3>
            <SwitchButton
                description="Mostrar Usuários:"
                enabled={showUsers}
                onToggle={handleShowUsers}
            />
            {showUsers && <Users users={users} />}
        </div>
    )
}
