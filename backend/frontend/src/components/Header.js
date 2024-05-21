import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Container, Row, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'
import logo from '../images/VITAPURALOGO.png' // Logonun yolunu belirle

function Header() {
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <header>
            <Navbar bg="white" variant="light" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>
                            <img
                                src={logo}
                                alt="Site Logo"
                                style={{ height: '150px', width: 'auto', marginRight: '50px' }} // Logonun stilini burada ayarla
                            />
                            VITAPURA
                        </Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <SearchBox />
                        <Nav className="ms-auto">
                            <LinkContainer to='/cart'>
                                <Nav.Link><i className="fas fa-shopping-cart"></i>Sepetim</Nav.Link>
                            </LinkContainer>

                            <NavDropdown title="Çölyak" id="categories-menu">
                                <LinkContainer to='/category/makarna'>
                                    <NavDropdown.Item>Makarna</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to='/category/ekmek'>
                                    <NavDropdown.Item>Ekmek</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to='/category/cikolata'>
                                    <NavDropdown.Item>Çikolata</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to='/category/baharat'>
                                    <NavDropdown.Item>Baharat</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to='/category/un'>
                                    <NavDropdown.Item>Un</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to='/category/kahve'>
                                    <NavDropdown.Item>Kahve</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                            <NavDropdown title="Fenilketonüri" id="categories-menu">
                                <LinkContainer to='/category/takviye'>
                                    <NavDropdown.Item>Takviye</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to='/category/paketgida'>
                                    <NavDropdown.Item>Paket Gıda</NavDropdown.Item>
                                </LinkContainer>
                                
                                
                            </NavDropdown>
                            <NavDropdown title="0-1 Yaş" id="categories-menu">
                                <LinkContainer to='/category/mama'>
                                    <NavDropdown.Item>Mama</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to='/category/pku'>
                                    <NavDropdown.Item>Fenilketonüri Bebek</NavDropdown.Item>
                                </LinkContainer>
                                
                            </NavDropdown>

                            {userInfo ? (
                                <NavDropdown title={userInfo.name} id='username'>
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item>Profile</NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <LinkContainer to='/login'>
                                    <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
                                </LinkContainer>
                            )}

                            {userInfo && userInfo.isAdmin && (
                                <NavDropdown title='Admin' id='adminmenu'>
                                    <LinkContainer to='/admin/userlist'>
                                        <NavDropdown.Item>Users</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to='/admin/productlist'>
                                        <NavDropdown.Item>Products</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to='/admin/orderlist'>
                                        <NavDropdown.Item>Orders</NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
