import React from 'react'
import Card from './Card'
import css from './panel.module.css'

export default function Panel({ installments, initial }) {

  return (

    <div className={css.panel}>
      {installments.map((state) => <Card key={state.currentPeriod} info={state} initial={initial} />)}
    </div>)
}
