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

const Content = () => {
  //console.log(props)

  const parts = [
    {name: 'Fundamentals of React', exercises: 10},
    {name: 'Using props to pass data', exercises: 7},
    {name: 'State of a component', exercises: 14},
    ]

  return(
    <>
    <Part name = {parts[0].name} exercises= {parts[0].exercises} />
    <Part name = {parts[1].name} exercises= {parts[1].exercises} />
    <Part name = {parts[2].name} exercises= {parts[2].exercises} />
    </>
  )
}

const Total = (props) =>{
  //console.log(props.parts)

  const parts = [
    {name: 'Fundamentals of React', exercises: 10},
    {name: 'Using props to pass data', exercises: 7},
    {name: 'State of a component', exercises: 14},
    ]

  return(

      <div>{parts[0].exercises + parts[1].exercises 
      + parts[2].exercises}</div>

    )

}

const Part = (props) =>{
 //console.log(props)
  return(
    <div>{props.name} ejercicio {props.exercises}</div>
    )
}


const App = () => {
  const course = 'Half Stack application development'  
  return (
    <div>
      <Header course = {course}/>
      <Content/>
      <Total/>
      
    </div>
  )
}

export default App
