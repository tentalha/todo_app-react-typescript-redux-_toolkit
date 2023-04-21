import {Nav, Navbar} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home" style={{marginLeft: '10px'}}>Todo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link>About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;