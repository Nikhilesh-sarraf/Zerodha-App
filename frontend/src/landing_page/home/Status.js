import React from 'react';
import './Status.css'

function Status() {
    return ( 
        <div className='container'>
            <h1>Status</h1>
            <div className='row'>
                 <div className='col-6'>
                    <h2 style={{textAlign:"left", fontSize:"30px", marginBottom:"35px", color:"#25343F" }}>Trust with confidence</h2>

                    <div style={{textAlign:"left" }} className='headding'>
                        <h3>Customer-first always</h3>
                        <p>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                    </div>
                    <span style={{textAlign:"left"}} className='headding'>
                        <h3>No spam or gimmicks</h3>
                        <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                    </span>
                    <span style={{textAlign:"left"}} className='headding'>
                        <h3>The Zerodha universe</h3>
                        <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    </span>
                    <span style={{textAlign:"left"}} className='headding'>
                        <h3>Do better with money</h3>
                        <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </span>
                 </div>
                 <div className='col-6 status_dia' >
                    <img src='media/images/ecosystem.png' alt="Ecosystem" />
                    <span className='anchorlink'>
                    <a href=''>Explore our products <i class='bx bx-right-arrow-alt'></i></a>
                    <a href=''>Try Kite demo  <i class='bx bx-right-arrow-alt'></i></a>
                    </span>
                 </div>
            </div>
        </div>
     );
}

export default Status;