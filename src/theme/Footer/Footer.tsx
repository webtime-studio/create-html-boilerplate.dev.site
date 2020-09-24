import React from 'react';
import { Logo, LinkItem } from '../../components';
import { footerMenuLinks, FooterMenuLink, footerSocialLinks, FooterSocialLink, socialSVG } from '../../site-data/footer';
import './footer.scss';

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer__wrapper">
      <div className="footer__logo-custom">
        <Logo />
      </div>

      <ul className="footer__menu">
        {footerMenuLinks.map((
          linkItem: FooterMenuLink,
          index: number,
        ) => (
          <li key={index}>
            <LinkItem {...linkItem} />
          </li>)
        )}
      </ul>

      <div className="footer__info-block">
        <p className="footer__copyright">Разработано © 2020,
            <a className="footer__webtime-studio-link" href="https://webtime.studio/" target="_blank" rel="noopener noreferrer"
            lang="en">Webtime.Studio</a>.
            Хостинг предоставлен
            <a className="footer__netlify-link" href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer"
            lang="en">Netlify</a>.
          </p>
        <div className="footer__social">
        {footerSocialLinks.map((
          socialLink: FooterSocialLink,
          index: number,
          ) => <LinkItem {...socialLink} />
        )}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
