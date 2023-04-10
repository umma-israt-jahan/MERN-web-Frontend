import React from "react"
import './bodyStyle.css'
import diamonNeckless from '.././../assest/DiamondPersonalizedNameNecklaceCursiveinGold_1800x1800.png'
import thirdSmallimg from '../../assest/Cursive_Name_Necklace_with_Diamond_in_Gold_Plating_0_540x.png'
import secondsmallimg from '../../assest/Cursive_Name_Necklace_with_Diamond_in_Gold_Plating_8_540x.png'
import blueColor from '../../assest/3c1355fc28a5d6c78d87789ba669065ede7a4359.png'
import yellow from '../../assest/b7dcf23d02215b2904b00393aba83b8a1e1c7318.png'
import pink from '../../assest/013435c0d6f3ebb16bf0e65eba889af5bb0b526b.png'
import yellowGold from '../../assest/Yellow_18K_Gold_Bold_Medium_Hoop_1_1800x1800.png' 
import appolowGold from '../../assest/Apollo14KGoldHoopsEarringsOskarhill_1800x1800.png'
import pillergold from '../../assest/pillar-bar-necklace-18k-gold-vermeil-12_1800x1800.png'
import whitePicture from '../../assest/OB_icons_grad_icons_two01-01.png'
import myVideo from '../../assest/6ead9ba517554967b0a95dc07435964d.mp4'
import{AiOutlineArrowLeft} from 'react-icons/ai'





export default function BodyComponent(){
    return(
       
          <>
            <section>
                <div className="BodyComponent">
                   <div className="body-box">
                    <div className="firstBox" style={{width:'200rem'}} >
                            <a href="#!" >
                            <img src={diamonNeckless} alt=""  style={{height:'50%', width:'100%'}}/>
                            </a>
                            <video controls autostart autoPlay src={myVideo} type="video/mp4"
                            style={{height:'50rem', width:'', marginTop:'5rem'}} />
                    </div>
                     
                
                    <div className=" middleBox" style={{ flexDirection:"column"}}>
                    
                        <a href="#!">
                        <img src={diamonNeckless} alt="" style={{width: "5rem"}}/>
                        </a>
                        <a href="#!">
                        <img src={thirdSmallimg} alt="" style={{width: "5rem"}}/>
                        </a>
                        <br/>
                        <img src={secondsmallimg} alt="" style={{width: "5rem"}}/>
                        
                    </div>

                    <div className="last-box">
                        <h1>Diamond Personalized Name Necklace </h1>
                        <h1 className="second-heading">Cursive in Gold</h1><br/>
                        <a href="#!">
                            <span style={{fontSize:"large", fontWeight:'600'}}>
                                <i fas fa-user>ar</i>
                                Size Guide
                            </span><br/>
                            <span>
                                <a href="#!" className="amount">Tk 19,700.00</a>
                            </span><br/>
                            <span>
                                <a href="#!" className="amount">Taxes & Duties Included</a>
                            </span><br/>
                            <span>
                            <i className="fas fa-user"></i>
                            </span>
                            available for orders up to $2,000 ⓘ<br/>
                            <span>
                            <i className="fas fa-user"></i>
                            </span>

                           
                        </a><br/>
                        <h3 class="Choose-material" style={{paddingtop:'17px', letterspacing: '2px'}}>STEP 1: CHOOSE MATERIAL</h3>
                        <div className="card">
                            <div className="card-heading" >
                               <a>
                               <img src={yellow} alt="" style={{borderRadius:'50px',width: '30px' , marginRight:'2px'}}/>
                               <div className="cardContainer">
                               <p>925</p>
                                <p>STERLING</p>
                                <p>SILVER</p>
                                <p>(tk</p>
                                <p>19,000.00)</p>
                               </div>
                               </a>
                            </div>

                            <div className="card-heading" >
                               <a>
                               <img src={blueColor} alt="" style={{borderRadius:'50px',width: '30px' , marginRight:'2px'}}/>
                               <div className="cardContainer">
                               <p>925</p>
                                <p>STERLING</p>
                                <p>SILVER</p>
                                <p>(tk</p>
                                <p>19,000.00)</p>
                                </div>
                                </a>
                            </div>
                            <div className="card-heading" >
                               <a>
                               <img src={pink} alt="" style={{borderRadius:'50px',width: '30px' , marginRight:'2px'}}/>
                               <div className="cardContainer">
                               <p>925</p>
                                <p>STERLING</p>
                                <p>SILVER</p>
                                <p>(tk</p>
                                <p>19,000.00)</p>
                                </div>
                                </a>
                            </div>

                            <div className="card-heading" >
                               <a>
                               <img src={yellow} alt="" style={{borderRadius:'50px',width: '30px' , marginRight:'2px'}}/>
                               <div className="cardContainer">
                               <p>925</p>
                                <p>STERLING</p>
                                <p>SILVER</p>
                                <p>(tk</p>
                                <p>19,000.00)</p>
                               </div>
                               </a>
                            </div>
                        </div><br/>

                        <div className="border"></div>
                        <div className="borderDown"><br/>
                                <h4>WRITE NAME OR TEXT BELOW ⬇️: (UP TO 10 CHARACTERS):</h4>
                        </div>
                        <button className="Button" style={{width: '80%', height: '2rem', background: 'black' , color: 'white', margintop: '1rem'}}>
                        ADD TO CART
                        </button>
                        <h5 className="happiness">
                            happiness Guaranted
                        </h5>

                        <div className="discription">
                            <h4 style={{addingtop: '1rem', color: 'rgb(45, 44, 44)'}}><b>Description</b></h4>
                            <h2 style={{paddingtop: '1rem'}}>Description</h2><br></br>
                            <p>
                                Our Diamond Personalized Name Necklace with- Gold Plated is the ideal accessory for creating a carefree signature look that goes well with your
                             favourite styles because it is sleek and understated. The pendant, which is made of tiny writing and looks great close to your skin,
                              has a cable chain that connects to each side. <br/><br/>

                              Gold plating is a fantastic option for individuals seeking an opulent lustre.
                               For maximum impact, this item has an 18k gold finish over 925 sterling silver.
                                    Personalize Me! It's simple to add your name to  this lovely necklace. You may use up to nine letters, 
                                    but remember that only the first will be capitalised and the others will be written in lowercase. 
                                    Double-check your spelling before you submit it!
                            </p>

                            <div className="linkSstep">
                                <ul >
                                    <li><h4>* ID :7741847339235</h4></li>
                                    
                                    <li><p><h4>* Thickness: 1.1mm</h4></p></li>
                                    
                                    <li><p><h4> * Height of pendant: 8.89mm x 34.04mm</h4></p></li>
                                    <li><p><h4>* Material: 18ct Gold Plated Sterling Silver 0.925</h4></p></li>
                                    <li><p><h4>* Chain style: Cable Chain</h4></p></li>
                                    <li><p><h4>* Chain length: Adjustable</h4></p></li>
                                    <li> <p><h4>* Style: Name Necklace Collection</h4></p></li>
                                    <li><p><h4>* Stone Type(s): Lab Diamond</h4></p></li>
                                    <li> <p><h4>* Total Carat Weight: 0.05</h4></p></li>
                                    <li>  <p><h4>* Shape: Round Cut Diamond</h4></p></li>
                                    <li><p><h4>* Avg. Diamond Color: D - F</h4></p></li>
                                    <li><p><h4>* Avg. Diamond Clarity: VS-SI</h4></p></li>
                                    
                                </ul>
                            </div>
                            <div className="border-three">

                            </div>
                                <div className="border-down-heading">
                                    <h3>JEWELRY CARE</h3>
                                </div><br/>
                                    <p>We strongly recommend that you remove your personalised name necklace with diamond in gold before engaging in any activity that may cause exposure to moisture or friction 
                                    (i.e. hand washing, sleeping, and showering) to maintain shine and extend shelf life.</p>

                            </div>
                            
    
                    </div>
                        
                    </div>
                    <div className="blackborder" style={{}}>
                                 
                                <a style={{paddingBottom:'2rem'}}>
                                    BLACK TO DIAMOND JEWELRY
                            </a>
                            </div>
                            <div className="BestSelling">
                                <h3>BEST SELLERS | ADD MORE</h3>
                            </div>
                    <div className="picture-border">
                        <div className="card">
                            <div class="card-heading">
                                <img src={yellowGold} alt="" style={{height:'20rem'}}/>
                                <p>18k Yellow Gold Bold Medium Hoops</p>
                                <p>Earrings</p>
                                <h4>TK 50,500.00</h4>
                            </div>
                            <div class="card-heading">
                            <img src={yellowGold} alt="" style={{height:'20rem'}}/>
                    
                        <p>18k Yellow Gold Eternity Medium Hoops</p>
                        <p>Earrings</p>
                        <h4> TK 64,500.00</h4>
                      
                    </div>
                    <div class="card-heading">
                        <img src={appolowGold} alt="" style={{height:'20rem'}}/>
            
                        <p>18k Yellow Gold Eternity Medium Hoops</p>
                        <p>Earrings</p>
                        <h4> TK 64,500.00</h4>
              
                    </div>
                    <div class="card-heading">
                        <img src={pillergold} alt="" style={{height:'20rem'}}/>
            
                        <p>18k Yellow Gold Eternity Medium Hoops</p>
                        <p>Earrings</p>
                        <h4> TK 64,500.00</h4>
                        <div className="undercolorround" style={{paddingLeft: '6.5rem'}}>
                            <img src={yellow} alt="" style={{borderRadius:'50px', width: '25px' , left: '5rem'}}/>
                            <img src={pink} alt="" style={{borderRadius:'50px', width: '25px' , left: '5rem'}}/>
                            <img src={blueColor} alt="" style={{borderRadius:'50px', width: '25px' , left: '5rem'}}/>
                            <img src={yellow}  alt="" style={{borderRadius:'50px', width: '25px' , left: '5rem'}}/>
                        </div>
              
                    </div>
                    </div>
                    <button class="btn-subcrb">VIEW ALL</button>
                 </div>
                        <div className="customer-section">
                            <div class="customer-text" style={{paddingTop: '2rem'}}>
                                <h2>Customer Satisfaction Guaranteed</h2>   
                            </div>
                            <div className="card">
                                <div class="white-picture" alt style={{paddingRight: '7rem' , paddingLeft: '2rem'}}>
                                    <img src={whitePicture} alt="" style= {{width:'62px'}}/>
                                    <h3 style={{fontWeight:'bold'}}>FREE SHIPPING</h3>
                                        <p style={{color: 'rgb(42, 41, 41)'}}></p>
                        
                                </div>

                                <div class="white-picture" alt style={{paddingRight: '7rem' , }}>
                                    <img src={whitePicture} alt="" style= {{width:'62px'}}/>
                                    <h3 style={{fontWeight:'bold'}}>2 YEAR WARRANTY</h3>
                                    <p style={{color: 'rgb(42, 41, 41)'}}>Every piece comes with a</p>
                                    <p>2 year warranty</p>
                        
                                </div>
                                <div class="white-picture" alt style={{paddingRight: '7rem' , paddingLeft: '2rem'}}>
                                    <img src={whitePicture} alt="" style= {{width:'62px'}}/>
                                    <h3 style={{fontWeight:'bold'}}>100 DAY RETURNS</h3>
                                        <p style={{color: 'rgb(42, 41, 41)'}}>We offer a full refund within</p>
                                        <p>100 Days of purchase</p>
                        
                                </div>
                                <div class="white-picture" alt style={{paddingRight: '7rem' , paddingLeft: '2rem'}}>
                                    <img src={whitePicture} alt="" style= {{width:'62px'}}/>
                                    <h3 style={{fontWeight:'bold'}}>SECURE CHECKOUT</h3>
                                    <p style={{color: 'rgb(42, 41, 41)'}}>Safe and secure online shopping</p>
                                    
                        
                                </div>
                            </div>
                        </div>
                    
                </div>
            </section>
           
                         {/* <Player
                          
                            src={videoimg}
                            style={{width:'100%',
                             height:'100%' }}/> */}
                        
                    
                        
                        
                   
                    

          </>
      
    )
}

