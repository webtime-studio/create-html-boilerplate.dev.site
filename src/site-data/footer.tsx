import {IconType} from "../components/SocialIcon/SocialIcon";

export interface FooterMenuLink {
  label: string,
  to?: string | null,
  href?: string | null,
}

export const footerMenuLinks: Array<FooterMenuLink> = [
  {
    label: "Документация",
    to: "docs/",
  },
  {
    label: "Блог",
    to: "blog",
  },
  {
    label: "MIT License",
    href: "#",
  },
  {
    label: "Скачать",
    href: "#",
  },
  {
    label: "GitHub",
    href: "https://github.com/webtime-studio/create-html-boilerplate",
  },
];

export interface FooterSocialLink {
  iconType: IconType,
  href: string,
}

export const footerSocialLinks: Array<FooterSocialLink> = [
  {
    iconType: "github",
    href: "https://github.com/webtime-studio",
  },
  {
    iconType: "linkedin",
    href: "https://www.linkedin.com/company/webtimestudio/",
  },
  {
    iconType: "facebook",
    href: "https://www.facebook.com/webtime.studio",
  },
  {
    iconType: "youtube",
    href: "https://www.youtube.com/channel/UC4K70b3dzAgCrO1JuP2aJXw",
  },
];
