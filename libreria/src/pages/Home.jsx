import React, { useContext } from 'react'
import Book from '../componentes/Book'
import {AppContext} from '../store/store.jsx'
import {Link} from 'react-router-dom'
import Navbar from '../componentes/Navbar'
import '../hojas_de_estilo/home.css'

const Home = () => {

  const{items} = useContext(AppContext)
  return (
    <>
    <Navbar />
    <div className="bookContainer">
    {
        items.map((item) => (
          <Book 
          id={item.id}
          title={item.title}
          author={item.author}
          cover={item.cover}
          />
        ))
      } 
      </div>
    </>
  )
}

export default Home
