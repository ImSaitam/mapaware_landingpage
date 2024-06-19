import 'bootstrap/dist/css/bootstrap.min.css';
import './styleComponents/main.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowRightLong } from "react-icons/fa6";

export default function Main() {
    return (
        <section className="bg-gradient nunito-font user-select-none vh-100">
            <Container fluid>
                <Row className='mx-md-n5'>
                    <Col className="w-1/2 px-md-5 mt-5 mb-5 mx-5 appContext verticalCenter">
                        <h1 className="text-lg md:text-3xl text-white font-bold tracking-wide text-white appSlogan">Mantente informado, mantente seguro con MapAware.</h1>
                        <h3 className='descriptionText'>MapAware es una aplicación comunitaria que ofrece alertas en tiempo real sobre eventos añadidos por los usuarios como accidentes, manifestaciones, obras viales, piquetes y asaltos.</h3>
                        <div className='flex flex-col'>
                            <a href='https://mapaware.com' className='btn btn-dark text-center justify-center w-full buttonGo' target='_blank' rel="noopener noreferrer" style={{ width: '100%' }}>
                                <span>Ir a MapAware <FaArrowRightLong className='arrowGoTo'/></span>
                            </a>
                        </div>
                    </Col>
                    <Col className="w-1/2 px-md-5 mt-5 mb-5 verticalImgCenter">
                        <img src={process.env.PUBLIC_URL + '/images/img1.png'} className='appImage' alt=''></img>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}