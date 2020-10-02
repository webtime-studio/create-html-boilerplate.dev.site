import React from 'react';
import {
  YouTubeIcon, FacebookIcon, GitHubIcon, LinkedinIcon,
} from '../icons';

interface SocialIconType {
  iconType: 'github' | 'linkedin' | 'facebook' | 'youtube';
}

const SocialIcon: React.FC<SocialIconType> = ({ iconType }) => (
  <>
    { iconType === 'github' ? <GitHubIcon /> : null}
    { iconType === 'linkedin' ? <LinkedinIcon /> : null}
    { iconType === 'facebook' ? <FacebookIcon /> : null}
    { iconType === 'youtube' ? <YouTubeIcon /> : null}
  </>
);

export default SocialIcon;
