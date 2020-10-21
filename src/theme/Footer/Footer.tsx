import React from 'react';
import { Logo, LinkItem, SocialIcon } from '../../components';
import {
  footerMenuLinks, FooterMenuLink, footerSocialLinks, FooterSocialLink,
} from '../../site-data/footer';
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
          <>
            <li className="footer__menu-item" key={index}>
              <LinkItem
                className="footer__menu-link"
                to={linkItem.to}
                href={linkItem.href}
              >
                {linkItem.label}
              </LinkItem>
            </li>
            <br />
          </>
        ))}
      </ul>

      <div className="footer__info-block">
        <p className="footer__copyright">© 2020 Разработано,&nbsp;
          <a
            className="footer__webtime-studio-link"
            href="https://webtime.studio/"
            target="_blank"
            rel="noopener noreferrer"
            lang="en">Webtime.Studio
          </a>.
          <br />
          Хостинг предоставлен&nbsp;
          <a
            className="footer__netlify-link"
            href="https://www.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
            lang="en">Netlify
          </a>.
        </p>
        <div className="footer__social">
          {footerSocialLinks.map((
            socialLink: FooterSocialLink,
            index: number,
          ) => (
            <LinkItem
              key={index}
              className={`footer__social-link footer__social-link--${socialLink.iconType}`}
              href={socialLink.href}>
              <SocialIcon iconType={socialLink.iconType} />
            </LinkItem>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
