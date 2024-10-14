import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../App'

function Home() {
  const {data, loading, setSearch} = useContext(AppContext)
  const [name, setName] = useState('')
  
  const handleForm = (e) =>{
    e.preventDefault()
    setSearch(name)
    setName('')
  }
  
  return (
    <section className='home'>
      <div className="container">
      <form onSubmit={handleForm}>
          <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
          <button type='submit'>Search</button>
        </form>
      </div>
      <div className="container grid">
        {
        loading ? <div className="loader-container"><div className='loading'/></div>:
        data === 'no data found' || data === null ? <h1>Cocktail Not Found</h1>:
        data.map(({idDrink, strDrink, strDrinkThumb, strGlass, strAlcoholic}) =>{
          return( 
            <article key={idDrink}>
              <img src={strDrinkThumb} alt={strDrink} />
              <div className="content">
              <h1>{strDrink}</h1>
              <h2>{strGlass}</h2>
              <p>{strAlcoholic}</p>
              <Link to={`/product/${idDrink}`}>Details</Link>
              </div>
            </article>
          )
        })
      }</div>
    </section>
  )
}

export default Home