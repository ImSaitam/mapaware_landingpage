import { Container, Nav, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styleComponents/header.css";

export default function Header() {
    return (
        <Navbar className="bg-dark">
            <Container>
                <Navbar.Brand className="" href="#home" style={{ fontFamily: 'Ubuntu, sans-serif' }}> 
                    <img 
                        alt="logo"
                        src={process.env.PUBLIC_URL + '/logo512.png'}
                        width={30}
                        height={30}
                        className="d-inline-block align-top"
                    />{' '}
                    mapaware
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end">
                        <Nav.Link href="#inicio">Inicio</Nav.Link>
                        <Nav.Link href="#quienesomos">Quienes somos</Nav.Link>
                        <Nav.Link href="#ayuda">Ayuda</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}