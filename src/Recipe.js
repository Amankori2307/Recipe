import React from 'react'

function Recipe({title,calories,image,ingredients}) {
    const text = ingredients.map((ingredient,index) =><li key = {index}>{ingredient}</li>)

    return (
        <div className = "recipe">
            <h1 className = 'title'>{title}</h1>
            <div className = "image-container">
                <img className = "image" src = {image} alt ="" />
            </div>
            <div className = "ingredients-list">
                <h2>Ingredients</h2>
                <ol>
                    {text}
                </ol>
            </div>
            <p className = "calories"><b>Calories : </b>{calories}</p>
        </div>
    )
}

export default Recipe
