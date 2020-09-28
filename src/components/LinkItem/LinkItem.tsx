import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import './link-item.scss';

interface LinkItemProps {
  className: string | null,
  to: string | null,
  href: string | null,
  children: string | React.ReactNode,
}

const LinkItem: React.FC<LinkItemProps> = ({className, to, href, children}) => {
const toUrl = useBaseUrl(to);
  return (
    <Link className={clsx("link-item", className)}
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
      {children}
    </Link>
  );
}

export default LinkItem;
