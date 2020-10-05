import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
const NavBar = () =>{
    return(
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link className="nav-link" to="/categories">
                        Categories
                    </Link>
                    <Link className="nav-link" to="/products">
                       Products
                    </Link>
                    <Link className="nav-link" to="/offers">
                       Offers
                    </Link>
                </Nav>
                <Nav className="ml-auto">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                    <Link className="nav-link" to="/signup">
                       SignUp
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;