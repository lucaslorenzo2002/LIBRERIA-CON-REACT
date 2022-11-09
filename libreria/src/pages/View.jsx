import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import {AppContext} from '../store/store.jsx'
import '../hojas_de_estilo/view.css'
import Navbar from '../componentes/Navbar.jsx'

const View = () => {
    const [item, setItem] = useState({})
    const params = useParams()
    const {getItem} = useContext(AppContext)

    useEffect(() => {
        const book = getItem(params.bookId);
        setItem(book)
    },[])

  return (
    <>
    <Navbar />
    <div className="viewContainer">
      <div>
        <div>{item?.cover ? <img src={item.cover} width="400" /> : ""}</div>
      </div>
        <h2>{item?.title}</h2>
        <div>{item?.author}</div>
        <div>{item?.intro}</div>
        <div>{item?.completed ? "Completado" : "No terminado"}</div>
        <div>{item?.review}</div>
    </div>
    </>
  )
}

export default View
