import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

const Logo: React.FC = () => (
  <Link to="/" className="logo">
    <img className="logo__image" src="/img/svg/logo.svg" alt="Create HTML Boilerplate" />
    <p className="logo__text" lang="en">Create HTML Boilerplate<br />
      <span className="logo__version">v1.0.1</span>
    </p>
  </Link>
)

export default Logo;
