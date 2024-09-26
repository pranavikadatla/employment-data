import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate=useNavigate()
    const username=localStorage.getItem("username");
    const logOut=()=>{
        navigate("/")
    }
  return (
    <div className='flex justify-between bg-blue-800 p-5 text-white font-semibold text-xl '>
        <Link to="/home">Home</Link>
        <Link to="/employeelist">Employee List</Link>
        <h1>{username}</h1>
        <button onClick={logOut}>LOG OUT</button>
    </div>
  )
}

export default NavBar;