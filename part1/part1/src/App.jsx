import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'


const Header = (props) => {
  //console.log(props)
  return(
    <>
    <h1> El nombre del curso es {props.course}</h1>
    </>
  )
}

const Content = (props) => {
  console.log(props)
  return(
    <>
    <h1> Esta es la parte {props.part} que tiene {props.exerc} ejercicios</h1>
    <p> El item {props.part} tiene {props.exercises} ejercicios</p>
    </>
  )
}


const App = () => {

  const course = 'Half Stack application development' 
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const info = [
    {part: 'Fundamentals of React', exercises: 10},
    {part: 'Using props to pass data', exercises: 7},
    {part: 'State of a component', exercises: 14},
    ]

  return (
    <div>
      <Header course = {course}/>
      <p>
      <Content part = {info[0].part} exercises = {info[0].exercises}/>
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App
