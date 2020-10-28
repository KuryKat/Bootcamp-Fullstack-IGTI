import React from 'react'
import { cardExtra } from './Card.module.css'

export default function Card({ children }) {
    return <div className={`${cardExtra} card`}>{children}</div>
}
