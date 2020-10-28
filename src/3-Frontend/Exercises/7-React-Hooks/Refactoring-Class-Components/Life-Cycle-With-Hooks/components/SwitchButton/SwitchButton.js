import React from 'react'

export default function SwitchButton({ onToggle, description }) {
    const handleChange = ({ target: { checked } }) => {
        onToggle(checked)
    }

    return (
        <div className="switch">
            <label>
                {description}
                <input type="checkbox" onChange={handleChange} />
                <span className="lever"></span>
            </label>
        </div>
    )
}
