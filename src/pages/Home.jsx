import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllRecipes } from '../redux/recipeSlice'

const Home = () => {

    const {allRecipes,loading,error}=useSelector(state=>state.recipeReducer)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchAllRecipes())
    },[])

    const [currentPage,setCurrentPage]=useState(1)
    const productPerPage=8
    const TotalPage=Math.ceil(allRecipes?.length/productPerPage)
    const currentPageLastProductIndex=productPerPage*currentPage
    const currentPageFirstProductIndex=currentPageLastProductIndex-productPerPage
    const visibleProductsCards=allRecipes?.slice(currentPageFirstProductIndex,currentPageLastProductIndex)

    const navigateToNextPage=()=>{
        if(currentPage!=TotalPage){
          setCurrentPage(currentPage+1)
        }
        }
        const navigateToPreviousPage=()=>{
          if(currentPage!=1){
            setCurrentPage(currentPage-1)
          }
          }


  return (
    <>
        <Header insideHome={true}/>
        <section class="py-5" style={{minHeight:'100vh'}}>
                <div class="container px-4 px-lg-5 mt-5">
                    <div  class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    
                    {
                        allRecipes?.length>0 ?
                        visibleProductsCards?.map(recipe=>(
                            <div key={recipe?.id} class="col mb-5">
                            <div  class="card h-100 p-3">
                               
                                <img class="card-img-top"  src={recipe?.image} alt="..." />
                               
                                <div class="card-body p-4">
                                    <div class="text-center">
                                       
                                        <h5 class="fw-bolder">{recipe?.name}</h5>
                                       
                                         <p>{recipe?.cuisine}</p>
                                    </div>
                                </div>
                              
                                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div class="text-center"><Link to={`${recipe?.id}/view`}  class="btn btn-outline-dark mt-auto">View More</Link></div>
                                </div>
                            </div>                            
                    </div>
                        ))
                        :
                        <div className="d-flex justify-conten-center align-items-center text-danger">
                        No Products are available!!
                      </div>
                      
                    }
                     <div className="text-center text-rose-900 my-5">
                        <span onClick={navigateToPreviousPage} className='cursor-pointer'><i className="fa-solid fa-backward me-5"></i></span>
                        <span className='text-2xl font-bold'>{currentPage} of {TotalPage}</span>
                        <span onClick={navigateToNextPage} className='cursor-pointer'><i className="fa-solid fa-forward ms-5"></i></span>

                    </div>
                       
                    </div>
                </div>
            </section>
    </>
  )
}

export default Home