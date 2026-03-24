

import React from 'react';

function LeftSection({Imageurl,heading,paragraph, link, googleplay,appleplay}) {
    return (  
        <div className='container' style={{marginTop:"2px", marginBottom:"2px"}}>
           <div className='row'>
              <div className='col-6'>
                 <img src={Imageurl} alt="Product Image" style={{width:'450px'}}/>
              </div>
              <div className='col-1'></div>
              <div className='col-5' style={{marginTop:"50px", textAlign:"left"}}>
                 <h2 style={{fontWeight:"500", fontSize:"25px", marginTop:"20px"}}>{heading}</h2>
                 <p>{paragraph}</p>
                 <div style={{display:"flex", gap:"20px"}}>
                    <a href=''>Try demo<i class='bx bx-right-arrow-alt'></i></a>
                    <a href=''>Learn more<i class='bx bx-right-arrow-alt'></i></a>
                 </div>
                 <div>
                    <a href=''> <img src='media/images/googlePlayBadge.svg' alt="Google Play" style={{width:"150px", marginTop:"20px", marginRight:"20px"}}/></a>
                    <a href=''> <img src='media/images/appstoreBadge.svg' alt="App Store"  style={{width:"140px", marginTop:"20px"}}/></a>
                 </div>
              </div>
           </div>
        </div>
    );
}

export default LeftSection;