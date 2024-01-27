import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image'; //Import the component:Image

/* CSS Modules
      - Allow you to scope CSS to a component by automatically creating unique class names,
      so you don't have to worry about style collisions as well.
      - benefit: Provide a way to make CSS classes locally scoped to components by default,
                reducing the risk of styling confilcts. 
                 Unique names for each component*/
import styles from '@/app/ui/home.module.css';
<div className={styles.shape} />;

export default function Page() {
  return (
    /* Tailwind
          // - className: style elements by adding class names
          - CSS Framework by allowing you to quicky write utility classes directly in your TSX markup.
          - Although the CSS styles are shared globally, each class is singularly applied to each element.
            = if you add or delete an element, you don't have to worry about 
            maintaining seperate stylesheets, style collisions, or the size of your CSS bundle growing as your application scales.*/

    /* Tailwind classes: */
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        {/* Use custom Fonts */}
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          {/* Added a line below. : Black triangle*/}
          <div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent" />
          {/* Font applied: ${lusitana.className} */}
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            //Set the 'width' and 'height' of the images to avoid layout shift : ratio identical to the source image
            width={1000}
            height={760}
            //'hidden' : to remove the image from the DOM on mobile screens
            //'md:block': to show the image on desktup screens
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero-mobile.png"
            //Set the 'width' and 'height' of the images to avoid layout shift : ratio identical to the source image
            width={500}
            height={620}
            //'hidden/block' : to remove/show the image from the DOM on mobile screens
            //'md:hidden/block': to remove/show the image on desktop screens
            className="md:hidden" //"md:hidden": also not show the image on desktop screens
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
      </div>
    </main>
  );
}
