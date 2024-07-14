import { useState } from 'react'
import Card from './components/Card'
import Form from './components/Form'
import './App.css'

function App() {
  const [cards,setCards] = useState([]);

  return (
    <>
    <Form cards={cards} setCards={setCards}/>
    <Card name="Kanna" description= "Passionate Programmer who is gonna become a billioner" intrests = {["Web Devlopment","Android Development","Machine Learning"]} />
    <Card name="Manideep" description= "An Fashion enthusiast who likes to take care of his body" intrests = {["Face care","Body care","Fashion"]}/>
    {
      cards.map(function (card) {
        return (
          <Card name={card.name} description={card.description} intrests={card.intrests} key={card.name}/>
        )
      })
    }
    </>
  )
}

export default App
