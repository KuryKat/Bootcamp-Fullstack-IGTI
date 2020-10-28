import React from 'react'
import { picture } from './Picture.module.css'

export default function Picture({ ImageSRC, description }) {
    return (
        <img
            className={picture}
            src={ImageSRC}
            alt={description}
            title={description}
        />
    )
}
