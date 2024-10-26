import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchRecipe } from '../redux/recipeSlice'

const Header = ({insideHome}) => {
    const dispatch=useDispatch()
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                <div class="container px-4 px-lg-5 d-flex justify-content-between">
                    <Link class="navbar-brand" to={'/'} style={{textDecoration:'none',letterSpacing:'10px',fontWeight:'600',color:'white'}}>DISHDIARIES</Link>
                {insideHome && <input onChange={(e)=>dispatch(searchRecipe(e.target.value.toLowerCase()))}  class="form-control" placeholder="Search Recepies..." className='w-25 p-2 rounded'></input>}               
                </div>
    </nav>
    </>
  )
}

export default Header