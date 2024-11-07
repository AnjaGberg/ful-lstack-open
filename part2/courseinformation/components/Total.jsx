
const Total = ({parts}) => {
  const total = parts.map(part => part.exercises).reduce((sum, num) => sum + num, 0)
  
  return (
    <div>
      <strong>total of {total} exercises</strong>
    </div>

  )
}

export default Total