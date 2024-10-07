const App = () => {
  const course = 'Half Stack application development'

  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name:'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
     < Header course = {course} />
     < Content content = {parts} />
     < Total lkm = {parts}/>
    </div>
  )

}

const Header = (props) => {
    console.log(props)  
    return <h1> {props.course} </h1>
}


const Content = (props) => {
  console.log(props) 
  return (
      <div>
        <Part content = {[props.name, props.exercises]} ></Part>
      </div>
  )
}

const Part = (props) => {
  return (
      <p> {props.name}{props.exercises} </p>

  )

}

const Total = (props) => {
  console.log(props)  
  return <p>{props.exercises}</p>
}

export default App
