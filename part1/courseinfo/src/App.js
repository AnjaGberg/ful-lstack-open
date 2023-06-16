const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  
  const parts = props.parts.map((element, index) => {
    return <Part key={index} part={element.name} exercises={element.exercises}/>
  });
  
  return (
    <div>
      {parts}
    </div>
  )
}

const Total = (props) => {
  let sum = 0
  props.parts.forEach(element => sum += element.exercises);

  return (
    <p>
      Number of exercises {sum}
    </p>
  )
}

const Part = (props) => {
  return(
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App