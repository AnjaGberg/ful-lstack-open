import { useState } from 'react'

const Statistics = ({good, neutral, bad, total, average, positive}) => {
  if (total === 0) {
    return(
      <p>No feedback given</p>
    )
  }

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive} />
      </tbody>
    </table>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text} </td>
      <td>{value}</td>
    </tr> 
  )
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleClick = (what) => {
    if (what === "good") {
      const newGood = good + 1
      setGood(newGood)
      setAverage(calculateAverage(newGood, bad, total + 1))
      setPositive(calculatePositivePercentage(newGood, total + 1))
    }
    if(what === "neutral") {
      setNeutral(neutral + 1)
      setAverage(calculateAverage(good, bad, total + 1))
      setPositive(calculatePositivePercentage(good, total + 1))
    }
    if(what === "bad") {
      const newBad = bad + 1
      setBad(newBad)
      setAverage(calculateAverage(good, newBad, total + 1))
      setPositive(calculatePositivePercentage(good, total + 1))
    }
    setTotal(total + 1)
  }

  const calculateAverage = (goodCount, badCount, totalCount) => {
      const score = goodCount * 1 + badCount * -1
      return score / totalCount
  }

  const calculatePositivePercentage = (goodCount, totalCount) => {
    return goodCount / totalCount * 100
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => handleClick("good")} text="good"></Button>
      <Button handleClick={() => handleClick("neutral")} text="neutral"></Button>
      <Button handleClick={() => handleClick("bad")} text="bad"></Button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive}/>
    </div>
  )
}

export default App
