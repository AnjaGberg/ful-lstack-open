import { useState } from 'react'


const App = () => {
  const initialAnecdotes = [
    { text: 'If it hurts, do it more often.', votes: 0 },
    { text: 'Adding manpower to a late software project makes it later!', votes: 0 },
    { text: 'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', votes: 0 },
    { text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', votes: 0 },
    { text: 'Premature optimization is the root of all evil.', votes: 0 },
    { text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', votes: 0 },
    { text: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.', votes: 0 },
    { text: 'The only way to go fast, is to go well.', votes: 0 }
  ]
  
  const [anecdotes, setAnecdotes] = useState(initialAnecdotes)
  const [randomNumber, setRandomNumber] = useState(0)
  const [bestAnecdote, setBestAnecdote] = useState(initialAnecdotes[0])

  const Button = ({handleClick, text}) => {
    return (
      <button onClick={handleClick}>
        {text}
      </button>
    )
  }
  
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const getRandomAnectode = () => {
    const randomNumber = getRandomInt(0, anecdotes.length - 1)
    setRandomNumber(randomNumber)
  }
  
  const voteForAnecdote = () => {
    const anecdotesCopy = [...anecdotes] 
    anecdotesCopy[randomNumber].votes += 1
    setAnecdotes(anecdotesCopy)
    getAnecdoteWithMostVotes(anecdotesCopy)
  }

  const getAnecdoteWithMostVotes = (anecdotes) => {
    const votesArray = anecdotes.map(a => a.votes)
    const highestVote = Math.max(...votesArray)
    const bestAnecdote = anecdotes.find(a => {
      return a.votes === highestVote
    })
    setBestAnecdote(bestAnecdote)
  }
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[randomNumber].text}</p>
      <p>has {anecdotes[randomNumber].votes} votes</p>
      <Button handleClick={() => voteForAnecdote()} text={"vote"}/>
      <Button handleClick={() => getRandomAnectode()} text={"next anecdote"}/>
      <h1>Anecdote with most votes</h1>
      <p>{bestAnecdote.text}</p>
      <p>has {bestAnecdote.votes} votes</p>
    </div>
  )
}

export default App