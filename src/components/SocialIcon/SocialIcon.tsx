import React from 'react';
import {
  YouTubeIcon, FacebookIcon, GitHubIcon, LinkedinIcon
} from '../icons';


interface SocialIconType {
  iconType: string;
};

const SocialIcon: React.FC<SocialIconType> = ({ iconType }) => {
  console.log(iconType);
  return (
    <>
      { iconType === 'github' ? <GitHubIcon /> : null}
      { iconType === 'linkedin' ? <LinkedinIcon /> : null}
      { iconType === 'facebook' ? <FacebookIcon /> : null}
      { iconType === 'youtube' ? <YouTubeIcon /> : null}
    </>
  )
};

export default SocialIcon;
