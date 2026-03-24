

import React from 'react';

function RightSection({Imageurl,heading,paragraph, linktopic}) {
    return (  
        <div className='container' >
           <div className='row' style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
              <div className='col-6' style={{marginTop:"0px", textAlign:"left"}}>
                 <h2 style={{marginBottom:"10px"}}>{heading}</h2>
                 <p>{paragraph}</p>
                 <div>
                    <a href='/'>{linktopic}<i class='bx bx-right-arrow-alt'></i></a>
                 </div>
              </div>
              <div className='col-1'></div>
              <div className='col-5'>
                 <img src={Imageurl} alt="Product" style={{width:"500px"}}/>
              </div>
           </div>
        </div>
    );
}

export default RightSection;