import React from 'react';

export interface FooterMenuLink {
  label: string,
  class: string,
  to: string | null,
  href: string | null,
}

export const footerMenuLinks: Array<FooterMenuLink> = [
  {
    label: "Документация",
    linkClass: "footer__menu-link",
    to: "docs/",
  },
  {
    label: "Блог",
    linkClass: "footer__menu-link",
    to: "blog",
  },
  {
    label: "MIT License",
    linkClass: "footer__menu-link",
    href: "#",
  },
  {
    label: "Скачать",
    linkClass: "footer__menu-link",
    href: "#",
  },
  {
    label: "GitHub",
    linkClass: "footer__menu-link",
    href: "https://github.com/webtime-studio/create-html-boilerplate",
  },
];

export interface FooterSocialLink {
  label: string,
  linkClass: string,
  href: string,
  svg: React.ReactNode,
}

const SocialSVG = {
  GITHUB: (
    <svg className="footer__social-svg" width="20" height="20" xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 478.613 478.613" enableBackground="new 0 0 478.613 478.613">
      <path
        d="M427.501,200.695c1.776-11.238,2.884-23.56,3.163-37.377c-0.107-59.246-28.468-80.21-33.925-90.038 c8.037-44.89-1.331-65.309-5.688-72.299c-16.07-5.704-55.91,14.722-77.678,29.101c-35.491-10.389-110.494-9.375-138.621,2.689 C122.856-4.389,95.408,1.277,95.408,1.277s-17.745,31.82-4.691,78.371c-17.075,21.759-29.802,37.143-29.802,77.949 c0,9.773,0.607,19.008,1.637,27.893c14.705,77.318,75.97,110.674,136.15,116.426c-9.056,6.881-19.928,19.903-21.432,34.992 c-11.379,7.357-34.268,9.789-52.067,4.193c-24.939-7.88-34.486-57.266-71.833-50.221c-8.081,1.512-6.475,6.842,0.523,11.386 c11.378,7.38,22.094,16.554,30.354,36.185c6.344,15.072,19.687,41.982,61.873,41.982c16.747,0,28.477-1.979,28.477-1.979 s0.319,38.406,0.319,53.385c0,17.238-23.264,22.078-23.264,30.348c0,3.289,7.7,3.601,13.888,3.601 c12.229,0,37.673-10.186,37.673-28.103c0-14.237,0.227-62.081,0.227-70.46c0-18.307,9.811-24.136,9.811-24.136 s1.201,97.727-2.361,110.829c-4.177,15.408-11.744,13.219-11.744,20.076c0,10.233,30.589,2.502,40.735-19.897 c7.849-17.495,4.334-113.331,4.334-113.331l8.183-0.178c0,0,0.094,43.892-0.188,63.944c-0.295,20.769-2.438,47.025,9.898,59.417 c8.097,8.15,32.903,22.451,32.903,9.382c0-7.574-17.371-13.833-17.371-34.353V344.45c10.553,0,12.734,31.072,12.734,31.072 l3.804,57.727c0,0-2.526,21.065,22.756,29.856c8.925,3.126,28.018,3.976,28.913-1.271c0.897-5.26-22.99-13.038-23.217-29.342 c-0.123-9.93,0.445-15.742,0.445-58.934c0-43.168-5.799-59.137-26.007-71.863C355.669,295.681,416.536,269.51,427.501,200.695z" />
    </svg>
  ),
  LINKEDIN: (
    <svg className="footer__social-svg" width="20" height="20" xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512" enableBackground="new 0 0 512 512">
      <rect y="160" width="114.496" height="352" />
      <path
        d="M426.368,164.128c-1.216-0.384-2.368-0.8-3.648-1.152c-1.536-0.352-3.072-0.64-4.64-0.896 c-6.08-1.216-12.736-2.08-20.544-2.08c-66.752,0-109.088,48.544-123.04,67.296V160H160v352h114.496V320 c0,0,86.528-120.512,123.04-32c0,79.008,0,224,0,224H512V274.464C512,221.28,475.552,176.96,426.368,164.128z" />
      <circle cx="56" cy="56" r="56" /></svg>
  ),
  FACEBOOK: (
    <svg className="footer__social-svg" width="20" height="20" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z" />
    </svg>
  ),
  YOUTUBE: (
    <svg className="footer__social-svg" width="20" height="20" viewBox="-21 -117 682.66672 682"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="m626.8125 64.035156c-7.375-27.417968-28.992188-49.03125-56.40625-56.414062-50.082031-13.703125-250.414062-13.703125-250.414062-13.703125s-200.324219 0-250.40625 13.183593c-26.886719 7.375-49.03125 29.519532-56.40625 56.933594-13.179688 50.078125-13.179688 153.933594-13.179688 153.933594s0 104.378906 13.179688 153.933594c7.382812 27.414062 28.992187 49.027344 56.410156 56.410156 50.605468 13.707031 250.410156 13.707031 250.410156 13.707031s200.324219 0 250.40625-13.183593c27.417969-7.378907 49.03125-28.992188 56.414062-56.40625 13.175782-50.082032 13.175782-153.933594 13.175782-153.933594s.527344-104.382813-13.183594-154.460938zm-370.601562 249.878906v-191.890624l166.585937 95.945312zm0 0" />
    </svg>
  ),
};

export const footerSocialLinks: Array<FooterSocialLink> = [
  {
    label: "",
    linkClass: "footer__social-link footer__social-link--github",
    href: "https://github.com/webtime-studio",
    svg: SocialSVG.GITHUB,
  },
  {
    label: "",
    linkClass: "footer__social-link footer__social-link--linkedin",
    href: "https://www.linkedin.com/company/webtimestudio/",
    svg: SocialSVG.LINKEDIN,
  },
  {
    label: "",
    linkClass: "footer__social-link footer__social-link--facebook",
    href: "https://www.facebook.com/webtime.studio",
    svg: SocialSVG.FACEBOOK,
  },
  {
    label: "",
    linkClass: "footer__social-link footer__social-link--youtube",
    href: "https://www.youtube.com/channel/UC4K70b3dzAgCrO1JuP2aJXw",
    svg: SocialSVG.YOUTUBE,
  },
];
