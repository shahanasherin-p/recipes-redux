import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'


const View = () => {
    
    const { id } = useParams()
    const [recipe, setRecipe] = useState({})


    useEffect(() => {
        if (sessionStorage.getItem("allRecipies")) {
          const allRecipies = JSON.parse(sessionStorage.getItem("allRecipies"))
          setRecipe(allRecipies?.find(item => item.id == id))
        }
      }, [])

  return (
    <>
    <Header/>
    <section class="py-5">
            <div  class="container px-4 px-lg-5 my-5">
            <div class="row gx-4 gx-lg-5 align-items-center">
                     <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0"  src={recipe?.image} alt="..." /></div>
                     <div class="col-md-6">
                         <div class="small mb-1">{recipe?.id}</div>
                         <h1 class="display-5 fw-bolder">{recipe?.name}</h1>
                         <div class="fs-5 mb-5">
                           Ingredients: {recipe?.ingredients}
                         </div>
                         <div>
                            <p>Meal Type :{recipe?.mealType}</p>
                            <p>Cuisne :{recipe?.cuisine}</p>
                            <p>Cooking Time :{recipe?.cookTimeMinutes}</p>
                            <p>Preparation Time :{recipe?.prepTimeMinutes}</p>
                            <p>Servings :{recipe?.servings}</p>


                        </div>
                         <p class="lead">Instructions:{recipe?.instructions}</p>

                    </div>
                 </div>
            </div>
        </section>
    </>
  )
}

export default View