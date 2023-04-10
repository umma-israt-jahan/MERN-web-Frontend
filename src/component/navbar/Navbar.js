import React from "react"

import  './navbar.css'

import {FaBars} from 'react-icons/fa';
import {GiPearlNecklace} from 'react-icons/gi'
import {GiHeartEarrings} from 'react-icons/gi';
import {GiNoseSide} from 'react-icons/gi'
import {AiFillStar} from 'react-icons/ai'



export default function NavMenu(){
    return(
        <>
      
      <nav className="bg-gray-800 py-0" >
      <div class="container flex">
      <div className="px-8 py-4 bg-primary flex items-center cursor-pointer relative group">
        <span className="text-white">
                <i > <FaBars/></i>
         </span>
        <span className="capitalize ml-2 text-white">all catagories</span>


        <div className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed hidden group-hover:block">
            <a href="#!" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                <i><GiPearlNecklace/></i>
                <span className="ml-6 text-gray-600 text-sm">Necklace</span>
            </a>
            <a href="#!" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                < i><GiHeartEarrings/></i>
                <span className="ml-6 text-gray-600 text-sm">Earrings</span>
            </a>
            <a href="#!" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
            < i><GiNoseSide/></i>
                <span className="ml-6 text-gray-600 text-sm">Nose pin</span>
            </a>
            <a href="#!" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
            < i><GiPearlNecklace/></i>
                <span class="ml-6 text-gray-600 text-sm">Gold</span>
            </a>
            
            <a href="#!" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
            < i><GiPearlNecklace/></i>
                <span class="ml-6 text-gray-600 text-sm">Diamond</span>
            </a>
            <a href="#!" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
            < i><GiPearlNecklace/></i>
                <span className="ml-6 text-gray-600 text-sm">Silver</span>
            </a>
        </div>
    </div>
    {/* navlink */}
    <div className="flex items-center justify-between flex-grow pl-12 gap-px">
                <div class="flex items-center space-x-6 capitalize gap-y-px-2">
                    <a href="index.html" class="text-gray-200 hover:text-white transition">Home</a>
                    <a href="shop.html" class="text-gray-200 hover:text-white transition">Shop</a>
                    <a href="#!" className="text-gray-200 hover:text-white transition"> Booking Ornaments</a>
                    <a href="#!" className="text-gray-200 hover:text-white transition">About Us</a>
                    <a href="#!" className="text-gray-200 hover:text-white transition"> Contact Us</a>


                </div>
                <a href="login.html" class="text-gray-200 hover:text-white transition" >LogIn</a>
                <a href="register.html" class="text-gray-200 hover:text-white transition">Register</a>

            </div>
      </div>
        
        </nav>
      
           
    
        </>
    )
}