import React from 'react'
import CountUp from 'react-countup'

export default function Votes({ value, previous }) {
    return (
        <CountUp
            start={previous || 0}
            end={value || 0}
            duration={0.6}
            separator="."
        >
            {({ countUpRef }) => <div ref={countUpRef} />}
        </CountUp>
    )
}
