import React from 'react'
import { positiveValue, negativeValue, card, idCard } from './Card.module.css'
export default function Card({ info, initial }) {
    let signal = ''
    let color = null

    if (info.finalAmount > initial) {
        signal = '+ '
        color = positiveValue
    } else {
        signal = '- '
        color = negativeValue
    }

    const currentPeriod = info.currentPeriod
    const finalAmount =
        'R$ ' +
        new Intl.NumberFormat('pt-BR', {
            style: 'decimal',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(info.finalAmount)
    const finalIncrement =
        signal +
        'R$ ' +
        new Intl.NumberFormat('pt-BR', {
            style: 'decimal',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(info.finalIncrement * Math.sign(info.finalIncrement))
    const finalPercentage = new Intl.NumberFormat('pt-BR', {
        style: 'percent',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(info.finalPercentage)

    return (
        <div className={card}>
            <div className={idCard}>
                <p>{currentPeriod}</p>
            </div>
            <div className={color}>
                <span>{finalAmount}</span>
                <br />
                <span>{finalIncrement}</span>
                <br />
                <span>{finalPercentage}</span>
            </div>
        </div>
    )
}
