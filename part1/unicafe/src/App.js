import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  // save clicks of each button to its own state
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
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {total}</p>
        <p>average {average}</p>
        <p>positive {positive} %</p>
    </div>
  )
}

export default App
