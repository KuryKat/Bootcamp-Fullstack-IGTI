import React, { Component } from 'react'
import css from './User.module.css'

export default class User extends Component {
    render() {
        const { name, picture } = this.props.user
        const { avatar, flexRow } = css
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
}
