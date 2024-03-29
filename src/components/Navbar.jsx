import React from 'react'
import { VscSignOut } from 'react-icons/vsc'
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"
const Navbar = (props) => {
    const navigate = useNavigate();
    const handleLogOut = () => {
        localStorage.removeItem('token');
        navigate("/login");
        props.showAlert("Logged Out Successfully", "green")
    }
    return (
        <div className='flex justify-between items-center p-4  w-full absolute bg-[#0a3557] h-16'>
            <h1 className='text-white text-3xl font-bold flex gap-1 items-center justify-center'>myNotes <img src={logo} alt="logo" className='w-10' /> </h1>
            <div className='flex justify-center items-center'>
                <button onClick={handleLogOut} className=' px-4 py-2 cursor-pointer text-white flex items-center gap-1 justify-center hover:text-[#5f8bac] hover:scale-110'><VscSignOut />Sign Out</button>
            </div>
        </div>
    )
}

export default Navbar