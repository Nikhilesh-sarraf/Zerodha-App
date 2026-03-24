import React from 'react';


function Hero() {
    return ( 
        <div className='container'>
             <h2  style={{fontSize:"35px"}}>Charges</h2>
             <p style={{fontSize:"25px"}}>List of all charges and taxes</p>
             <div className='row' style={{display:"flex", marginTop:"25px"}}>
                <div className='col-4' style={{textAlign:"left"}}>
                   <img src="/media/images/pricing0.svg" alt="Free account"  style={{width:"175px"}}/>
                   <h2 style={{fontSize:"25px"}}>Free equity delivery</h2>
                   <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4' style={{textAlign:"left"}}>
                   <img src="/media/images/pricingEquity.svg" alt="Equity"  style={{width:"175px"}}/>
                   <h2 style={{fontSize:"25px"}}>Intraday and F&O trades</h2>
                   <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4' style={{textAlign:"left"}}>
                   <img src="/media/images/intradayTrades.svg" alt="Intraday"  style={{width:"175px"}} />
                   <h2 style={{fontSize:"25px"}}>Free direct MF</h2>
                   <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
             </div>
        </div>
     );
}

export default Hero;