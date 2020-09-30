import React from 'react';
import { IconProps } from './types';

const LinkedinIcon: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "footer__social-svg",
}) => (
  <svg
    aria-labelledby="linkedin-icon-title"
    role="img"
    width={width}
    height={height}
    className={className}
    enableBackground="new 0 0 512 512"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg">
    <rect y="160" width="114.496" height="352" />
    <path
      d="M426.368,164.128c-1.216-0.384-2.368-0.8-3.648-1.152c-1.536-0.352-3.072-0.64-4.64-0.896 c-6.08-1.216-12.736-2.08-20.544-2.08c-66.752,0-109.088,48.544-123.04,67.296V160H160v352h114.496V320 c0,0,86.528-120.512,123.04-32c0,79.008,0,224,0,224H512V274.464C512,221.28,475.552,176.96,426.368,164.128z" />
    <circle cx="56" cy="56" r="56" />
    <title id="linkedin-icon-title">Мы в линкедин</title>
  </svg>
);

export default LinkedinIcon;
