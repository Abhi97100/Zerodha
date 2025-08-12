import React from 'react';

function RightSection({imageUrl, productName, productDescription, learnMore}) {
    return ( 
        <div>
            <div className='container mt-5 '>
            <div className='row p-5 '>
                
                <div className="col-6  mt-5 ">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>

                    <div>
                    <a href={learnMore} style={{marginLeft:"50px"}}>Learn More</a>
                    </div>
                    </div>
                <div className="col-6 " style={{paddingBottom:"100px"}}>
                    <img src={imageUrl} alt="" />
                </div>

                </div>
            </div>
        </div>
     );
}

export default RightSection;