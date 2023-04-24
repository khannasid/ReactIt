import React from 'react'
import './App.css'
import Nav from './Nav'
import Card from './Card'
import data from './data.jsx'

export default function App() {
  const cards = data.map((item) =>{
    return(
      <Card 
      img={item.img} 
      country={item.country} 
      map = {item.map} 
      title = {item.title} 
      start = {item.start} 
      end= {item.end} 
      details= {item.details} 
      />
    );
  });
  return (
    <div>
    <Nav/>
      <div>
        {cards}
      </div>
    </div>
  )
}


