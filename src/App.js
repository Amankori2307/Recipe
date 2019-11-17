import React, {useEffect, useState}from 'react';
import './App.css';
import Recipe from './Recipe'
const App = () =>{
  const APP_ID = "33557bdf"
  const APP_KEY = "cd747aa855377cc656b7002953a332b3"
  
  // const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  // const [counter, setCounter] = useState(0)
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("chicken")

  useEffect(() => {
    getRecipe()
  },[query])

  const getRecipe = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    setRecipes(data.hits)
  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault()
    if(search == ""){
      setQuery("chicken")
    }
    else{
      setQuery(search)
    }
    setSearch("")
    }

  return(
    <div className  = "App">
      <form onSubmit = {getSearch} className = "search-form">
            <input className = "search-bar" type = "text" value = {search} onChange = {updateSearch} />
            <button className =  "search-button" type = "submit">Search</button>
      </form>
      <div className = "container">
      {recipes.map((recipe,index) => <Recipe key = {index}  title = {recipe.recipe.label} calories = {recipe.recipe.calories} image = {recipe.recipe.image} ingredients = {recipe.recipe.ingredientLines} />)}
      </div>
    </div>
  )
}

export default App;
