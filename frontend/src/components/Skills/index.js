import awsSVG from "./aws-icon.svg";
import pythonSVG from "./python-icon.svg";
import gcpSVG from "./gcp-icon.svg";
import sqlSVG from "./sql-icon.svg"
import playwrightSVG from "./playwright-icon.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./Skills.css";
import colorSharp from "./color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Dive into the core of what I bring to the table: a diverse array of skills honed to perfection. In this section, explore the tools and techniques that I wield with expertise, each skill a cornerstone in building tomorrow's data solutions.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={sqlSVG} alt="" />
                  <h5>SQL</h5>
                </div>
                <div className="item">
                  <img src={pythonSVG} alt="" />
                  <h5>python</h5>
                </div>
                <div className="item">
                  <img src={awsSVG} alt="" />
                  <h5>Amazon Web Services</h5>
                </div>
                <div className="item">
                  <img src={gcpSVG} alt="" />
                  <h5>Google Cloud Platform</h5>
                </div>
                <div className="item">
                  <img src={playwrightSVG} alt="" />
                  <h5>Web Scraping</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  )
}
