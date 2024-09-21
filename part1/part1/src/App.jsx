import { useState } from 'react'




const Button = (props) =>(
  <button onClick = {props.accion} >{props.text}</button>
)


const StatisticLine = (props) =>{
  console.log(props)

  return(
    <div>
      <tr>
      <td>{props.text} {props.value}</td>
      </tr>
    </div>
  )
  
        
}

const Statistics = (props) =>{
  //  console.log(props)
  return(
    <div>
      
      {props.total === 0 ? (<p>No se recibió feedback</p>):(
        <div>
          {/* <h1>Statistics</h1>      
          <p>Bueno {props.feedback.good}</p>
          <p>Neutral {props.feedback.neutral}</p>
          <p>Malo {props.feedback.bad}</p>
          <p>Total {props.total}</p>
          <p>Promedio {props.average > 0 ? (props.total/props.average):0}</p>
          <p>Positivo {props.total > 0 ? (props.feedback.good/props.total):0}</p> */}
          <StatisticLine text = 'Bueno' value ={props.feedback.good} />
          <StatisticLine text = 'Neutral' value ={props.feedback.neutral} />
          <StatisticLine text = 'Malo' value ={props.feedback.bad} />
          <StatisticLine text = 'Total' value ={props.total} />
          <StatisticLine text = 'Promedio' value ={props.average > 0 ? (props.total/props.average):0} />
          <StatisticLine text = 'Positivo' value ={(props.total > 0 ? (props.feedback.good/props.total):0)*100 + " %"} />

        </div>)}
      
    </div>

  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  // const [good, setGood] = useState(0)
  // const [neutral, setNeutral] = useState(0)
  // const [bad, setBad] = useState(0)
  const [feedback, setFeedback] = useState({good: 0, neutral: 0, bad: 0 })
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState({0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0})
  const [max, setMaxKey] = useState(0)
  // const points = {0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0}


  const setGood = () =>{
    setFeedback((prevFeedBack) => {
      const updateFeedBack =  {...prevFeedBack, good: prevFeedBack.good + 1}
      setTotal(updateFeedBack.good + updateFeedBack.bad + updateFeedBack.neutral)
      setAverage(updateFeedBack.good - updateFeedBack.bad)
      return updateFeedBack
    })
  }

  const  setBad = () => {
      setFeedback((prevFeedBack) => {
        const updateFeedBack = {...prevFeedBack, bad: prevFeedBack.bad + 1}
        setTotal(updateFeedBack.good + updateFeedBack.neutral + updateFeedBack.bad)
        setAverage(updateFeedBack.good - updateFeedBack.bad)
        return updateFeedBack        
      }
    )
  } 
  
  const setNeutral = () => {
      setFeedback((prevFeedBack) => {
      const updateFeedBack = {...prevFeedBack, neutral: prevFeedBack.neutral + 1}
      setTotal(updateFeedBack.good + updateFeedBack.neutral + updateFeedBack.bad )
      return updateFeedBack
      }    
    )
  }

  const setRandomValue = () =>{
    // console.log(anecdotes.length)
    setSelected((Math.floor(Math.random() * (anecdotes.length))))
  }

  const setVote = () => {
    const copy = {...points}
    copy[selected] += 1
    maxValue(copy)
    setPoints(copy)    
    // console.log(copy)
  }

  const maxValue = (props) => {
    // console.log(props)
    setMaxKey(Object.keys(props).reduce((valorPrevio, nextValue) =>{
      return props[nextValue] > props[valorPrevio] ? nextValue : valorPrevio;
    },0))

    // console.log(max)
    // setMaxKey(Object.keys(props).reduce((maxIndex, currentIndex)))
  }

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]


  return (
    <div>
      <h1>Give Feedback</h1>
      <Button accion = {setGood} text={'Good'}/>
      <Button accion = {setNeutral} text='Neutral'/>
      <Button accion = {setBad} text={'Bad'}/>
      
      {/* <h1>Statistics</h1>      
      <p>Bueno {feedback.good}</p>
      <p>Neutral {feedback.neutral}</p>
      <p>Malo {feedback.bad}</p>
      <p>Total {total}</p>
      <p>Promedio {average > 0 ? (total/average):0}</p>
      <p>Positivo {total > 0 ? (feedback.good/total):0}</p> */}
        <Statistics feedback = {feedback} total = {total} average ={average}/>

      <div>
        <h1>Anecdota del día</h1>
        <p>{anecdotes[selected]}</p>
        <p>Tiene {points[selected]} votos</p>
        {/* <p>{selected}</p> */}
        {/* <p>{anecdotes.length + 1}</p> */}
        {/* <p>{points[points]}</p> */}
        <Button accion = {setVote} text={'Vote'}/>
        <Button accion = {setRandomValue} text={'Next'}/>
        <h1>Anecdota con más votos</h1>
        <p>{anecdotes[max]}</p>
      </div>


    </div>
    
    
  )
}

export default App