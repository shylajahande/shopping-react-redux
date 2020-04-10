import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button'
import styled from 'styled-components'

class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to="/" className="navbar-brand"><i className="fab fa-audible"></i></Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">Products</Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link to="/videos" className="nav-link">Videos</Link>
                    </li>
                </ul> 
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2"><i className="fas fa-cart-plus"/></span>
                        My Cart
                    </ButtonContainer>
                </Link>       
            </NavWrapper>
        )
    }
}
const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link{
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`
export default Navbar;