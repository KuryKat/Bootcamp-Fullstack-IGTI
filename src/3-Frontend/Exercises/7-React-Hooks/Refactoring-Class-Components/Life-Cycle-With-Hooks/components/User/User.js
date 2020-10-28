import React from 'react'
import { avatar, flexRow } from './User.module.css'

export default function User({ user: { name, picture } }) {
    return (
        <div className={flexRow}>
            <img
                className={avatar}
                src={picture.large}
                alt={`Foto de ${name.first}`}
            />
            <span>{name.first}</span>
        </div>
    )
}
