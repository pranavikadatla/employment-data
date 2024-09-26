import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate=useNavigate()
    const [name,setName]=useState('');
    const[password,setpasssword]=useState('')
  const handleSubmit=()=>{
     if(name&&password){
        localStorage.setItem("username",name)
        navigate("/home")
     }
     else{
        alert("please Fill all the Fields");
     }
  }
    return (
        <div className='m-6 w-[400px]  p-6 ml-[450px] text-center border-1 mt-10 rounded-md bg-slate-300'>
            <h1 className=' text-3xl font-bold text-blue-900'>LOGIN PAGE</h1>
            <form className='' onSubmit={handleSubmit}> 
                <div className='mt-6'>
                <label className='text-blue-800 text-xl'> UserName : </label>
                <input className=" border-2 " type="text"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                /></div>
                <div className='mt-6'>
                <label className='text-blue-800 text-xl'>Password :</label>
                <input type="password" className=" border-2 ml-3"
                  value={password}
                  onChange={(e)=>setpasssword(e.target.value)}
                 />
                 </div>
                 <div >
                <button className="mt-6 border-2 px-4 py-1 rounded-md bg-blue-800 text-white text-lg"type="submit">Login</button>
                </div> 
            </form>
        </div>
    )
}

export default LoginPage;