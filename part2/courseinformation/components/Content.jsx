import Part from "./Part";
const Content = ({parts}) => {

  return (
    <div>
      {parts.map((part) => {
        console.log(part.id);
        return <Part key={part.id} part={part}/>
      })}
    </div>

  )
  
  // const mapped_parts = parts.map((part) => {
  //   return <Part key={part.id} part={part.name} exercises={part.exercises}/>
  // });
  
  // console.log(mapped_parts);
  // return (
  //   <div>
  //     {mapped_parts}
  //   </div>
  // )
}

export default Content