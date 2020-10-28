import React from 'react'
import { star } from './Popularity.module.css'

const stars = {
    full: '★',
    empty: '☆',
    max: 10,
}

export default function Popularity({ value }) {
    const popularity = `${stars.full.repeat(value)}${stars.empty.repeat(
        stars.max - value
    )}`
    return <div className={star}>{popularity}</div>
}
