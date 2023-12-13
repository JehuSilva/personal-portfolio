import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "./header-img.svg";
import 'animate.css';
import './Banner.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(50);
  const [, setIndex] = useState(1);
  const toRotate = ["Cloud Architect", "Data Engineer"];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(50);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""} style={{ transform: isVisible ? 'scale(1)' : 'scale(0.9)' }}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1 className="banner-animation-title">
                    {`Hi! I'm Jehu`} <span className="banner-txt-rotate" dataperiod="1000" data-rotate='[ "Cloud Architect", "Data Engineer"]'><span className="wrap">{text}</span></span>
                  </h1>
                  <p>Passionate about transforming complex data into clear, actionable insights. Armed with Python and AWS, I craft sophisticated solutions that drive innovation and efficiency. Join me in exploring the possibilities of big data and cloud computing, and let's turn data-driven dreams into reality!</p>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""} style={{ transform: isVisible ? 'scale(1)' : 'scale(0.9)' }}>
                  <img src={headerImg} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}