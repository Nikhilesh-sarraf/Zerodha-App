import React from 'react';
import './Education.css'

function Education() {
    return(
        <div className='container'>
            <div className='row'>
                <div className='col-5 varsity_img'>
                    <img src='media/images/education.svg ' alt="Education" />
                </div>
                <div className='col-1'></div>
                <div className='col-6 education_sta'>
                    <h2>Free and open market education</h2>
                    <span>
                        <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                        <a href=''>Varsity <i class='bx bx-right-arrow-alt'></i></a>
                    </span>
                    <span>
                        <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                        <a href=''>TradingQ&A <i class='bx bx-right-arrow-alt'></i></a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Education;