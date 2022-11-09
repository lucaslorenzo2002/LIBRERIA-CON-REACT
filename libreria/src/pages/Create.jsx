import React, { useContext, useState } from 'react'
import {AppContext} from '../store/store.jsx'
import {Link, useNavigate} from 'react-router-dom'
import Navbar from '../componentes/Navbar.jsx'
import '../hojas_de_estilo/create.css'

const initialState = {
    title: '',
    author: '',
    review: '',
    intro: '',
    completed: false
}

const Create = () => {
    const[form, setForm] = useState(initialState)
    const[cover, setCover] = useState('')

    const{createItem} = useContext(AppContext)
    
    const navigate = useNavigate()

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleOnChangeFile = (e) => {
        const element = e.target;
        let file = element.files[0];
        let reader = new FileReader();
        reader.onloadend = function () {
          setCover(reader.result.toString());
        };
        reader.readAsDataURL(file);
      }

    const handleSubmit = (e) => {
        e.preventDefault()

        const newBook = {
            id: crypto.randomUUID(),
            title: form.title,
            author: form.author,
            cover: cover,
            intro: form.intro,
            completed: form.completed,
            review: form.review
          };

          createItem(newBook);
          navigate('/')
    }

  return (
    <>
      <Navbar/>
      <form onSubmit={handleSubmit}>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
          />
          

          <label>Author</label>
          <input
            type="text"
            name="author"
            value={form.author}
            onChange={handleChange}
          />

    
          <label>Cover</label>
          <input type="file" name="cover" onChange={handleOnChangeFile} />
          <div>{!!cover ? <img src={cover} width="200" /> : ""}</div>
    

          <label>Intro</label>
          <input 
            type="text"
            name="intro"
            value={form.intro}
            onChange={handleChange}
          />

          <label>Completed</label>
          <input
            type="checkbox"
            name="completed"
            value={form.completed}
            onChange={handleChange}
          />

          <label>Review</label>
          <input
            type="text"
            name="review"
            value={form.review}
            onChange={handleChange}
          />

          <button className='submitBtn' type="submit">crear</button>
    </form>
    </>
    )
}

export default Create
