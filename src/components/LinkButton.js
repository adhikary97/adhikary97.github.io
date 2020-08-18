import React from 'react';
import { Button } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import tiktokIcon from '@iconify/icons-simple-icons/tiktok';
import youtubeIcon from '@iconify/icons-simple-icons/youtube';
import twitterIcon from '@iconify/icons-simple-icons/twitter';
import instagramIcon from '@iconify/icons-simple-icons/instagram';
import './WidthLimit.scss';

const LinkButton = (props) => {
  let icon = '';

  if (props.link.includes('youtube')) {
    icon = <Icon icon={youtubeIcon} />;
  } else if (props.link.includes('instagram')) {
    icon = <Icon icon={instagramIcon} />;
  } else if (props.link.includes('twitter')) {
    icon = <Icon icon={twitterIcon} />;
  } else if (props.link.includes('tiktok')) {
    icon = <Icon icon={tiktokIcon} />;
  }

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
