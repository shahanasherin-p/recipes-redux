import React from 'react'
import { Link } from 'react-router-dom'

const Pnf = () => {
  return (
    <>
        <div style={{paddingTop:"100px",height:"80vh"}} className='d-flex justify-content-center align-items-center flex-column'>
        <img style={{width:"400px"}} src="https://i.pinimg.com/originals/11/dc/96/11dc96d2e4daca3ea8ff6aa41299b5e1.gif" alt="" />
        <Link className='bg-primary p-2 text-decoration-none  text-white rounded' to={'/'}>Home</Link>
     </div>

    </>
  )
}

export default Pnf