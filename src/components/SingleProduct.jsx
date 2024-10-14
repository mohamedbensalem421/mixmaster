
import React, { useContext, useEffect, useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import axios from 'axios';
import { AppContext } from '../App';
function SingleProduct() {
  const {productId} = useParams()
  const {loading, setLoading} = useContext(AppContext)
  const [product, setProduct] = useState({})
  const fetchSingleProduct = async () =>{
    try {
      const response = await axios(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${productId}`)
      setLoading(false)
      setProduct(response.data.drinks[0])
    } catch (error) {
      console.log(error);
    }
  }
  console.log(product&& product.idDrink);

  useEffect(() =>{
    fetchSingleProduct()
    setLoading(true)
  },[])
  
  const {strDrink,
    strDrinkThumb,
    strGlass,
    strAlcoholic,
    strCategory,
    strInstructions, 
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5} = product
  const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5]
  .filter((ingredient) => ingredient !== null)
  .join(', ')
  

  return (
    <section className='product'>
      <Link to='/'>Back Home</Link>
      {loading ? <div className="loader-container"><div className='loading'/></div> :
      <div className="container">
        <h1>{strDrink}</h1>
        <div className="content">
            <img src={strDrinkThumb} alt={strDrink} />
          <div className="text">
              <p><span>Name: </span> {strDrink}</p>
              <p><span>Category: </span> {strCategory}</p>
              <p><span>Info: </span> {strAlcoholic}</p>
              <p><span>Glass: </span> {strGlass}</p>
              <p><span>Ingredients: </span> {ingredients}</p>
              <p><span>Instructions: </span> {strInstructions}</p>
          </div>
        </div>
      </div>
        }
    </section>
  )
}

export default SingleProduct