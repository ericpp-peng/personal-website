import {NextPage} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {memo, ReactNode} from 'react';

interface PageProps {
  title: string;
  description: string;
  children?: ReactNode;
}

const Page: NextPage<PageProps> = memo(({children, title, description}) => {
  const {asPath: pathname} = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />

        {/* several domains list the same content, make sure google knows we mean this one. */}
        <link href={`https://po-peng-personal-website.vercel.app${pathname}`} key="canonical" rel="canonical" />

        {/* Open Graph : https://ogp.me/ */}
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content={`https://po-peng-personal-website.vercel.app${pathname}`} property="og:url" />
        <meta content="website" property="og:type" />
        <meta content="https://po-peng-personal-website.vercel.app" property="og:site_name" />
        <meta content="https://po-peng-personal-website.vercel.app/profilepic.jpg" property="og:image" />

        {/* Twitter: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup */}
        <meta content={title} name="twitter:title" />
        <meta content={description} name="twitter:description" />
      </Head>
      {children}
    </>
  );
});

Page.displayName = 'Page';
export default Page;
