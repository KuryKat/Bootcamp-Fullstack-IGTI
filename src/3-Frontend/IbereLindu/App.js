import React, { Component } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Panel from './components/Panel';


export default function App() {
  const [initialInvest, setInitialInvest] = useState(1000)
  const [interest, setInterest] = useState(0.5)
  const [period, setPeriod] = useState(1)
  const [installments, setInstallments] = useState([])
  const [finalAmount, setFinalamount] = useState(0)

  useEffect(() => {

    const calculatePercentage = (initialInvest, value) => ((value / initialInvest) - 1)

    let previousValue = initialInvest
    let interestArray = []
    let finalIncrement = 0
    let finalAmount = 0
    for (let i = 0; i < period; i++) {
      let currentPeriod = i + 1
      let currentIncrement = (previousValue * interest) / 100
      finalIncrement += currentIncrement
      finalAmount = initialInvest + finalIncrement //previousValue + currentIncrement
      let finalPercentage = calculatePercentage(initialInvest, finalAmount)
      interestArray[i] = { currentPeriod, finalAmount, finalIncrement, finalPercentage }
      previousValue = finalAmount
    }

    setInstallments(interestArray)
    setFinalamount(finalAmount)

    return () => {
    }
  }, [initialInvest, interest, period])


  const handleInvest = (invest) => {
    setInitialInvest(invest)
  }

  const handleInterest = (interest) => {
    setInterest(interest)
  }

  const handlePeriod = (period) => {
    setPeriod(period)
  }
  return (
    <div>
      <Header
        state={[initialInvest, interest, period]}
        handles={[handleInvest, handleInterest, handlePeriod]}
      />
      <Panel installments={installments} initial={initialInvest} />
    </div>
  )
}
