import React from 'react'

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Total = ({ course }) => {
  const sumExcercisesReducer = (initial, item) => initial + item.exercises 
  const sum = course.parts.reduce( sumExcercisesReducer, 0)

  return(
    <p><strong>Number of exercises {sum}</strong></p>
  ) 
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>    
  )
}

const Content = ({ course }) => {
  return (
    <div>
    {course.parts.map(part => <Part key={part.id} part={part}/>)}
    </div>
  )
}

const Course = ({course}) => {
    return(
      <div>
        <Header course = {course} />
        <Content course = {course} />
        <Total course = {course} />
      </div>
    )
  }


export default Course