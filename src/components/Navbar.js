import React from 'react';
import LocalMallIcon from '@mui/icons-material/LocalMallOutlined';
import { GlobalContext } from '../context/GlobalContext';

function Navbar() {
    const {amount} = GlobalContext();
    
    return (
        <nav>
            <div className='nav-center'>
                <h3>HotDeals</h3>
                <div className='nav-container'>
                <LocalMallIcon className='cartImage'/>
                <div className='amount-container'>
                    <p className='total-amount'>{amount}</p>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
