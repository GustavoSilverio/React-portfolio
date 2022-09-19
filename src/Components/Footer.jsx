import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <Container className="footer-container">
                <Row className="footer-row">
                    <Col size={12} className='footer-logo'>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col size={12} sm={6} className="">
                        <div className="social-icon icones">
                            <a href="#bottom"><img src={navIcon1} alt="Icon" /></a>
                            <a href="#bottom"><img src={navIcon2} alt="Icon" /></a>
                            <a href="#bottom"><img src={navIcon3} alt="Icon" /></a>
                        </div>
                        <p className="icones">Copyright 2022. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;
