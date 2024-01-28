/*
  5. Navigating Between Pages
  - How to use the 'next/link component.
  - How to show an active link with the usePathname() hook.
  - How navigation works in Next.js
*/

// Code-splitting (Automatic) by route segments <-> traditonal React SPA: where the browser loads all the application code on intial load;
//    :pages become isolated;
//     If a certain page throws an error, the rest of the application will still work;

// prefetching (Automatic)
//    :Whenever <Link> components appear in the browser's viewpoint,
//      Next.js automatically prefetches the code for the linked route in the background;
//    :By the time the user clicks the link,
//      the code for the destination page will already be loaded in the background;
//    :to make the page transition near-instant;

// usePathname() : hook; to check the path and implement the pattern
'use client'; //:react for usePathname, set the nav-link.tsx to Client Component

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                //Condition: the button linked(seleted) is changed to 'blue'
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
