import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
            <p style={{fontSize:"24px",textAlign:"left", marginLeft:"30px"}}>We pioneered the discount broking model in India.
            Now, we are breaking ground with our technology.</p>
             <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <p style={{fontSize:"16px",textAlign:"left"}}>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>
                        <p style={{fontSize:"16px",textAlign:"left"}}>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>
                        <p style={{fontSize:"16px",textAlign:"left"}}>Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
                    </div>
                    <div className='col-6'>
                        <p style={{fontSize:"16px",textAlign:"left"}}>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
                        <p style={{fontSize:"16px",textAlign:"left"}}> <a href=''>Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
                        <p style={{fontSize:"16px",textAlign:"left"}}>And yet, we are always up to something new every day. Catch up on the latest updates on our <a href=''>blog </a>or see what the media is saying about us or learn more about our business and product <a href=''>philosophies.</a></p>
                    </div>
                </div>
             </div>


             <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <img src='media/images/nithinKamath.jpg' style={{width:"200px", borderRadius:'50%'}}/>
                        <h2>Nithin Kamath</h2>
                        <p>Founder,CEO</p>
                    </div>
                    <div className='col-6'>
                        <p style={{fontSize:"16px",textAlign:"left"}}>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                        <p style={{fontSize:"16px",textAlign:"left"}}>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                        <p style={{fontSize:"16px",textAlign:"left"}}>Playing basketball is his zen.</p>
                        <p style={{fontSize:"16px",textAlign:"left"}}>Connect on <a href=''>Homepage</a>/<a href=''>TradingQnA</a>/<a href=''>Twitter</a></p>
                    </div>
                </div>
             </div>
        </div>
    );
}

export default Hero;