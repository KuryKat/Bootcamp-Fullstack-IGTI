import React, { Component } from 'react'

export default class SwitchButton extends Component {
    handleChange = ({ target: { checked } }) => {
        const { onToggle } = this.props
        onToggle(checked)
    }
    render() {
        const { description } = this.props
        return (
            <div className="switch">
                <label>
                    {description}
                    <input type="checkbox" onChange={this.handleChange} />
                    <span className="lever"></span>
                </label>
            </div>
        )
    }
}
