import "./styleComponents/footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import { FaXTwitter } from "react-icons/fa6";
import { FaBug } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
            <Container fluid>
                <Row className="bg-dark text-white">
                    <Col className="mx-5 pe-none">
                        <h4>MapAware</h4>
                        <p className="text-xl developText user-select-none">© 2024</p>

                    </Col>
                    <Col className="mx-5">
                    <h4>Enlaces Útiles</h4>
                    <a href="x.com/x" className="text-white text-decoration-none links"><p>Seguir en <FaXTwitter /></p></a>
                    <a href="https://github.com/ImSaitam/MapAware" className="text-white text-decoration-none links"><p>Repositorio público <FaGithub /></p></a>
                    <a href="https://github.com/ImSaitam/MapAware/issues/new/choose" className="text-white text-decoration-none links"><p>Reportar errores/Sugerir funcionalidades <FaBug /></p></a>
                    </Col>
                    <Col className="mx-5">
                    <h4>Contacto</h4>
                    <p>mapaware@ayuda.com</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}