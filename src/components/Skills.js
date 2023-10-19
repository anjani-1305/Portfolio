import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image1 from '../assets/img/image1.jpg';
import Image2 from '../assets/img/image2.jpg';
import Image3 from '../assets/img/image3.jpg';
import Image4 from '../assets/img/image4.jpg';
import Image5 from '../assets/img/image5.jpg';
import Image6 from '../assets/img/image6.jpg';
import Image7 from '../assets/img/color-sharp.png';


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                I possess a diverse skill set, excelling in machine learning
                with a focus on predictive models, natural language processing,
                and computer vision. My expertise extends to backend
                development, where I specialize in robust API design and
                efficient database optimization. I've also honed my web
                development skills, creating engaging web applications and
                data-driven dashboards that combine user-centric design with
                seamless functionality.
              </p>
              <Carousel responsive={responsive} infinite= {true} className="skill-slider">
                <div className="item">
                    <img src={Image1} alt = 'Image' />
                    <h5>Coding</h5>
                </div>
                <div className="item">
                    <img src={Image2} alt = 'Image' />
                    <h5>Machine Learning</h5>
                </div>
                <div className="item">
                    <img src={Image3} alt = 'Image' />
                    <h5>Backend-Development</h5>
                </div>
                <div className="item">
                    <img src={Image4} alt = 'Image' />
                    <h5>Frontend-Development</h5>
                </div>
                <div className="item">
                    <img src={Image5} alt = 'Image' />
                    <h5>Data Structures & Algorithms</h5>
                </div>
                <div className="item">
                    <img src={Image6} alt = 'Image' />
                    <h5>Object Oriented Programming</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src = {Image7} />
    </section>
  );
};
