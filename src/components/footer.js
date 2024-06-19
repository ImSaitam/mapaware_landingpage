import "./styleComponents/footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import { FaXTwitter } from "react-icons/fa6";
import { FaBug } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer>
            <Container fluid className="nunito-font user-select-none">
                <Row className="bg-dark text-white">
                    <Col className="mx-5 mt-3">
                        <h4>MapAware</h4>
                        <p className="text-xl developText ">© 2024</p>
                    </Col>
                    <Col className="mx-5 small mt-3">
                    <h4 className="sub-title">Enlaces Útiles</h4>
                    <a href="https://x.com/x" className="text-white text-decoration-none links" target="_blank" rel="noopener noreferrer"><p>Seguir en <FaXTwitter /></p></a>
                    <a href="https://mapaware.com/preguntas-frecuentes" className="text-white text-decoration-none links" target="_blank" rel="noopener noreferrer"><p>Preguntas frecuentes</p></a>
                    <a href="https://github.com/ImSaitam/MapAware" className="text-white text-decoration-none links" target="_blank" rel="noopener noreferrer"><p>Repositorio público <FaGithub /></p></a>
                    <a href="https://github.com/ImSaitam/MapAware/issues/new/choose" className="text-white text-decoration-none links" target="_blank" rel="noopener noreferrer"><p>Reportar errores/Sugerir funcionalidades <FaBug /></p></a>
                    </Col>
                    <Col className="mx-5 mt-3">
                    <h4>Contacto</h4>
                    <p className="contactText">mapaware@ayuda.com</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}