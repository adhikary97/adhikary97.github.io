import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import tiktokIcon from '@iconify/icons-simple-icons/tiktok';
import youtubeIcon from '@iconify/icons-simple-icons/youtube';
import instagramIcon from '@iconify/icons-simple-icons/instagram';
import githubIcon from '@iconify/icons-simple-icons/github';
import discordIcon from '@iconify/icons-simple-icons/discord';
import './WidthLimit.scss';

const LinkButton = (props) => {
  const [icon, setIcon] = useState('');
  useEffect(() => {
    if (props.link.includes('youtube')) {
      setIcon(<Icon icon={youtubeIcon} />);
    } else if (props.link.includes('instagram')) {
      setIcon(<Icon icon={instagramIcon} />);
    } else if (props.link.includes('tiktok')) {
      setIcon(<Icon icon={tiktokIcon} />);
    } else if (props.link.includes('github')) {
      setIcon(<Icon icon={githubIcon} />);
    } else if (props.link.includes('discord')) {
      setIcon(<Icon icon={discordIcon} />);
    } else {
      setIcon('Uncaught Exceptions Pod');
    }
  }, [props]);

  return (
    <Button
      variant="outline-light"
      href={props.link}
      className="mb-3 max-button"
      size="lg"
      block
    >
      {icon}
    </Button>
  );
};

export default LinkButton;
