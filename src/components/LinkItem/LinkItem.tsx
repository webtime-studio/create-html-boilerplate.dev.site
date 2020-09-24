import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import './link-item.scss';

interface LinkItemProps {
  label: string,
  linkClass: string,
  to: string | null,
  href: string | null,
  svg: React.ReactNode | null,
}

const LinkItem: React.FC<LinkItemProps> = ({to, href, label, linkClass, svg}) => {
const toUrl = useBaseUrl(to);
  return (
    <Link className={clsx("linkItemClass", linkClass)}
      {...(href
        ? {
          target: '_blank',
          rel: 'noopener noreferrer',
          href,
          }
        : {
          to: toUrl,
      })
      }>
      {label}
      {svg}
    </Link>
  );
}

export default LinkItem;
