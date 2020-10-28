import React from 'react'
import { position } from './Position.module.css'

export default function Position({ children }) {
    return <div className={position}>{children}</div>
}
