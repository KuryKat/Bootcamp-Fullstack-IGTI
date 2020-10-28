import React from 'react'

export default function Info({ children, name }) {
    return <div id={`Info_about_${name}`}>{children}</div>
}
