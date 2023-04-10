import React from 'react'
// import { useState } from "react";
import  './home.css'
import NavMenu from './../navbar/Navbar'
import {AiFillStar} from 'react-icons/ai'


export default function HomePage(){
    return(
        <>
        
        <div class="header" >
            <h4>15% OFF TODAY
                <i class="fas fa-star"></i>
                 CODE: GIFT15 </h4>
        </div>

        <div class="header-secound">
            <p>+FREE SHIPPING ENDS IN</p>
        </div>

        <div class="header-third">
            <a href="#!" style={{paddingBottom:'1px'}}>WATERPROOF Jewellery</a>
            <a href="#!" className='startIcon' style={{display:'flex',paddingTop:'1px'}}>
                <i ><AiFillStar/></i>
                <i ><AiFillStar/></i>
                <i ><AiFillStar/></i>
                <i ><AiFillStar/></i>
                <i ><AiFillStar/></i>
                15000+ 5STAR REVIEWS</a>
            100 DAY RETURNS & 2 YEARS WARRANTY
            
        </div>
        <div>
            
        </div>
        
        
        
        <div className='navmenu'>
        <NavMenu/>
        </div>
       

        
        </>
    )
}