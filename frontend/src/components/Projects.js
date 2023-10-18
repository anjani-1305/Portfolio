import { Container, Row , Col, TabContainer, TabContent, Tab , Nav, Anchor} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp from "../assets/img/color-sharp2.png";
import bhumi from "../assets/img/Bhumi.png";
import real from "../assets/img/Real.png";
import blog from "../assets/img/Blog.png";
import eats from "../assets/img/Myeats.png";
import study from "../assets/img/Study.png";
import onepage from "../assets/img/Onepage.png";
export const Projects = () => {
  const projects = [
    {
      title: "Bhumi-NGO",
      description: "A NGO Website which uses React and Django",
      imgUrl: bhumi,
    },
    {
      title: "RealEstimate",
      description: "Model That Predicts Price of a Home",
      imgUrl: real,
    },
    {
      title: "Blog-Django",
      description:
        "Django Project Which Uses Pure Static HTML,CSS For Blogging",
      imgUrl: blog,
    },
    {
      title: "MyEatss",
      description:
        "A Responsive User Friendly Website for Dinning and Takeouts",
      imgUrl: eats,
    },
    {
      title: "StudyBud",
      description: "A Website That Is Built Totally On Django",
      imgUrl: study,
    },
    {
      title: "OnePage",
      description: "A Website that uses Django makes a OnePage Template ",
      imgUrl: onepage,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              "Explore my diverse projects, from the Bhumi-NGO website merging
              React and Django for a noble cause to the RealEstimate home price
              prediction model. The elegant Blog-Django project uses pure static
              HTML and CSS for blogging, while MyEatss offers a user-friendly
              dining experience. StudyBud, entirely built on Django, emphasizes
              my commitment to facilitating learning and innovation."
            </p>
            <TabContainer className="projects-tabs" defaultActiveKey="first">
            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
              <Nav.Item>
                <Nav.Link eventKey="first">Tab One</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab Two</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Tab Three</Nav.Link>
              </Nav.Item>
            </Nav>
            <TabContent>
              <Tab.Pane eventKey="first">
                <Row>
                  {
                    projects.map((project,index)=>{
                    return (
                      <ProjectCard {...project} key={index} />
                    )
                    })
                  }
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Row>
                  {
                    projects.map((project,index)=>{
                    return (
                      <p>{project.title}</p>
                    )
                    })
                  }
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <Row>
                  {
                    projects.map((project,index)=>{
                    return (
                      <p>{project.title}</p>
                    )
                    })
                  }
                </Row>
              </Tab.Pane>

            </TabContent>
            </TabContainer>
          </Col>
        </Row>
      </Container>
     <img  className="background-image-right" src={colorSharp}></img>
    </section>
  );
};
