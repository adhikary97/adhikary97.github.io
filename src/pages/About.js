import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Button, Image } from 'react-bootstrap';
import '../components/WidthLimit.scss';

const About = () => {
  const profile = (
    <Image
      alt="logo"
      width="120"
      height="150"
      src={process.env.PUBLIC_URL + '2019_Adhikary_Paras.jpg'}
      className="mb-4"
      rounded
    />
  );

  return (
    <ListGroup>
      <div className="mx-lg-5 mr-3 ml-3 mb-5 d-flex flex-column align-items-center text-center">
        {profile}
        <h4 className="text-white mb-4">
          <strong>About me...</strong>
        </h4>
        <h5 className="text-white mb-5 max-button">
          I am an aspiring entrepreneur, video creator, and engineer with
          experience in front-end and back end devlopement. My hobbies include
          coding, playing soccer, and hip-hop music!
        </h5>
        <Button
          variant="outline-light"
          href={process.env.PUBLIC_URL + 'AdhikaryParas2020_2.pdf'}
          size="lg"
          download
        >
          My Resume
        </Button>
      </div>
    </ListGroup>
  );
};

export default About;
