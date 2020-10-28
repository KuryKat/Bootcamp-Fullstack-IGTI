import React from 'react'
import CountUp from 'react-countup'

export default function Percentage({ value, previous }) {
    return (
        <CountUp
            start={previous || 0}
            end={value || 0}
            decimals={2}
            decimal=","
            suffix="%"
            duration={0.6}
        >
            {({ countUpRef }) => <div ref={countUpRef} />}
        </CountUp>
    )
}
