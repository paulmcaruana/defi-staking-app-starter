import React, {Component} from 'react';
import bank from '../cryptocurrency.png';

class Navbar extends Component {
    render() {
        return (
            <nav className='navbar navbar-dark fixed-top shadow p-0' style={{height: '60px'}}>
                <a className='navbar-brand col-sm-3 col-md-2 mr-0'
                style={{color:'#74a7f7'}}>
                <img src= {bank} width='50' height='auto' className='d-inline-block align-center' alt='bank image'/> 
                &nbsp; DAPP Yield Staking (Decentralised Banking) 
                </a>
                
                <ul className='navbar-nav px-3'>
                    <li className='text-no-wrap d-none nav-item d-sm-none d-sm-block'>
                        <small style={{color: '#74a7f7'}}>
                            ACCOUNT NUMBER: {this.props.account}
                        </small>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;