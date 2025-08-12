import React from 'react';
import {Link} from 'react-router-dom'

function OpenAccount() {
    return ( 
        <div className='container text-center mb-5'>
            <div className='row p-5'>
                <h1 className='fs-2 mb-3'>Open a Zerodha account</h1>
                <p>Modern platforms and apps, &#8377;0 investments, and flat &#8377;20 intraday and F&#38;O trades.</p>
                <button 
                    className='mx-auto mt-3 w-25 p-2 btn  fs-5 cta-btn' 
                    style={{backgroundColor:"#387ED8", color:"white", marginBottom:"4rem"}}>
                    <Link to="/signup" className='btn'>Sign up for free</Link>
                </button>
            </div>

        </div>
     );
}

export default OpenAccount;