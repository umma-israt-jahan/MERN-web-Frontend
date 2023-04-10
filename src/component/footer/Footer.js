import React from "react"
import './footer.css'
import {FaFacebookF} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs'
import {FaPinterestP} from 'react-icons/fa'

export default function FooterSection(){
    return(
        <>
<section>
    <div className="footer" style={{backgroundColor:"white"}}>
            <div class="footer-headline" >

                </div>
                <h1 className="BeTheFirstKnow">BE THE FIRST TO KNOW!</h1>
                    <p style={{paddingleft: '1rem', paddingtop: '1rem', color:'black'}}>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals, 
                        receive insider information on exclusive offers and new arrivals.</p>
                <input type="email" placeholder="Enter your Email" class="email"/><button class="btn-subcrb">SUBSCRIVE</button>

  

                </div>
            <div >
        <div className="uderIcon" >
        <span class="footer-icon" style={{paddingright: "10px;"}}>
            <i ><FaFacebookF/></i>
        </span>
        <span class="footer-icon" style={{paddingright: "10px;"}}>
            <i ><BsInstagram/></i>
        </span>
        <span class="footer-icon">
            <i ><FaPinterestP/></i>
        </span>
    </div>
</div>
<div class="footer-headline">

</div>







 {/* footer  */}


<footer class="footer">
<div class="box-container">
    <div class="box">
        <h3 className="aboutUs" style={{paddingleft: "1rem;"}}>ABOUT US</h3>
        <p class="footer-text"><strong>OSKAR HILL</strong> 
            is a lifestyle retailer dedicated
             to inspiring customers through
             a unique combination of product, 
             creativity and cultural understanding. Celebrating 
             the precious moments of life with meaningful
              Jewellery is Oskar Hill true calling.
        </p>
    </div>
    <div className="box">
        <h3>SHOP</h3>
        <a href="#!">Necklaces</a>
        <a href="#!">Earring</a>
        <a href="#!">Bracelets</a>
        <a href="#!">Ring</a>
    
    </div>
    <div className="box">
        <h3>NEED HELP</h3>
        <a href="#1">About Us</a>
        <a href="#!">Contact Us</a>
        <a href="#!">Blogs</a>
        <a href="#!">Register</a>
        <a href="#!">Track my order</a>
    </div>
    <div className="box">
        <h3>LEGAL</h3>
        <a href="#!">Privacy Policy</a>

        <a href="#!">Shipping Policy</a>
        <a href="#!">Refunr privacy</a>
        <a href="#!">Terms of Service</a>
        <a href="#!">Payment</a>
    </div>
    <div className="box">
        <h3>Contact</h3>
        <a href="#!">Email:isratfariha58@gmail.com</a>
    </div>
    </div>

        {/* Copyright */}

                <p>
            &copy; 2023 Oskar Hill
                </p>
        {/* Copyright */}
</footer>


 {/* Copyright end 
footer-end  */}

    </section>
        </>
    )
}