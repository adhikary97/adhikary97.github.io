import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import githubIcon from '@iconify/icons-simple-icons/github';

const ProjectCard = (props) => {
  return (
    <Card className="col-12 col-md-6 col-lg-3 mx-3 my-3">
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Card.Text>
          <strong>Language/Framework:</strong> {props.languages}
        </Card.Text>
      </Card.Body>
      <div className="d-flex flex-row justify-content-around mb-3">
        <Button variant="outline-primary">
          <Icon icon={githubIcon} href={props.github} />
        </Button>
        {props.url !== '' && (
          <Button variant="outline-success" href={props.url}>
            It's Live!
          </Button>
        )}
      </div>
    </Card>
  );
};

export default ProjectCard;
