import React, { Component } from 'react'
import { switchContainer } from './SwitchButton.module.css'

export default class SwitchButton extends Component {
    handleChange = ({ target: { checked } }) => {
        const { onToggle } = this.props
        onToggle(checked)
    }
    render() {
        const { description, theme } = this.props
        return (
            <div className={`switch ${switchContainer}`}>
                <label>
                    {description}
                    <input type="checkbox" onChange={this.handleChange} />
                    <span className="lever"></span>
                    <h6>Tema Atual: {theme}</h6>
                </label>
            </div>
        )
    }
}
