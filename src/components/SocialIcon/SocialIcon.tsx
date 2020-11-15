import React from 'react';
import {
  YouTubeIcon, FacebookIcon, GitHubIcon, LinkedinIcon,
} from '../icons';

export type IconType = 'github' | 'linkedin' | 'facebook' | 'youtube';

export interface SocialIconType {
  iconType: IconType;
}

const SocialIcon: React.FC<SocialIconType> = ({ iconType }) => (
  <>
    {iconType === 'github' ? <GitHubIcon /> : null}
    {iconType === 'linkedin' ? <LinkedinIcon /> : null}
    {iconType === 'facebook' ? <FacebookIcon /> : null}
    {iconType === 'youtube' ? <YouTubeIcon /> : null}
  </>
);

export default SocialIcon;
