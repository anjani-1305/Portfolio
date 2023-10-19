import { Container , Row ,Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.ico";
import icon1 from "../assets/img/icon1.png";
import icon2 from "../assets/img/icon2.png";
import icon3 from "../assets/img/icon3.png";
import icon4 from "../assets/img/icon4.png";
export const Footer = () => {

    return(
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <MailchimpForm />
                    <Col sm={6}>
                        <img src={logo} alt="Logo"/>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href='https://www.linkedin.com/in/anjanikumar13/' target="_blank"><img src={icon1}/></a>
                            <a href='https://www.instagram.com/anjani_1302/' target="_blank"><img src={icon2}/></a>
                            <a href='https://github.com/anjani-1305' target="_blank"><img src={icon3}/></a>
                            <a href='mailto:kanjani142@gmail.com' target="_blank"><img src={icon4}/></a>
                        </div>
                        <p>© Anjani 2023. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}