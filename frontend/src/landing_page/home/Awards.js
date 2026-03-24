import React from 'react';
import './Awards.css'

function Awards() {
    return ( 
      
        <div className='container'>
             <h1>Awards</h1>
            <div className='row'>

                 <div className='col-6 award'>
                     <img src='media/images/largestBroker.svg' alt="Largest Broker" />
                 </div>

                 <div className='col-6 award'>
                     <h2>Largest stock broker in India</h2>
                     <p>4+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                      <div className='container' style={{marginLeft:"20px"}}>
                          <div className='row'>

                              <div className='col-6' style={{alignItems:"center", textAlign:"center"}}>
                                 <ul className='list_name'> 
                                    <li>Futures and Options</li>
                                    <li>Commodity derivatives</li>
                                    <li>Currency derivatives</li>
                                 </ul>
                              </div>

                              <div className='col-6'>
                                 <ul className='list_name'>
                                    <li>Stocks & IPOs</li>
                                    <li>Direct mutual funds</li>
                                    <li>Bonds and Govt. Securities</li>
                                 </ul>
                              </div>
                          </div>
                      </div>
                  <img src='media/images/pressLogos.png' alt="Press Logos" style={{width:"450px", marginLeft:"40px"}}/>
                 </div>

            </div>
        </div> 


     );
}

export default Awards;