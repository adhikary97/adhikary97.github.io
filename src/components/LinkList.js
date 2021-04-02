import React from 'react';
import { ListGroup, Image } from 'react-bootstrap';
import LinkButton from './LinkButton';

const LinkList = () => {
  const links = [
    'https://bitclout.com/u/parasadhikary',
    'https://anchor.fm/uncaughtexceptions',
    'https://discord.gg/qC5VbE6eq4',
    'https://www.youtube.com/channel/UCS5TBjWDhNmf2GZO4nx2SLw?sub_confirmation=1',
    'https://www.tiktok.com/@paras.adhikary',
    'https://www.instagram.com/paras.adhikary',
    'https://github.com/adhikary97',
  ];

  return (
    <ListGroup>
      <div className="mx-lg-5 mr-3 ml-3 d-flex flex-column align-items-center">
        <Image
          alt="logo"
          width="120"
          height="150"
          src={process.env.PUBLIC_URL + '2019_Adhikary_Paras.jpg'}
          className="mb-4"
          rounded
        />
        <h5 className="mb-4 text-white">@paras.adhikary</h5>
        {links.map((link) => (
          <LinkButton key={link} link={link} />
        ))}
      </div>
    </ListGroup>
  );
};

export default LinkList;
