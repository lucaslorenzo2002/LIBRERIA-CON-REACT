import React from 'react'
import { Link } from 'react-router-dom'
import '../hojas_de_estilo/book.css'

const Book = ({id, title, cover, author}) => {
  return (
    <>
      <div className='book' key={id}>
        <div className="bookInfo">
        <h2>{title}</h2>
        <p>{author}</p>
        <Link to={`/view/${id}`}><img src={cover} alt={title} width="200" /></Link>
        </div>
      </div>
    </>
  )
}

export default Book
