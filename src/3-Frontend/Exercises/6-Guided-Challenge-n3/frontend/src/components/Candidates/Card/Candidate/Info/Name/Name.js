import React from 'react'
import { name } from './Name.module.css'

export default function Name({ children }) {
    return <div className={name}>{children}</div>
}
