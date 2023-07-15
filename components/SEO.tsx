import Head from 'next/head';
import { DefaultSeo, DefaultSeoProps } from 'next-seo';
import { userData } from '@/data';

interface SEOProps extends DefaultSeoProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  sideUrl?: string;
  author?: string;
  services?: string;
}

const defaultTitle =userData.defaultTitle
const defaultDescription =userData.defaultDescription
const defaultImageUrl = userData.defaultImageUrl

const SEO: React.FC<SEOProps> = ({
  title = defaultTitle,
  description = defaultDescription,
  imageUrl,
  sideUrl,
  author,
}) => {
  const siteName = userData.siteName
  const siteUrl = userData.siteUrl
  const finalImageUrl = imageUrl || defaultImageUrl;
  const defaultAuthor = userData.defaultAuthor
 
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Basic Meta Tags */}
        <meta name="description" content={description} />
        <meta name="image" content={finalImageUrl} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={finalImageUrl} />
        <meta property="og:url" content={sideUrl || siteUrl} />
        <meta property="og:site_name" content={siteName} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={finalImageUrl} />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Additional Meta Tags */}
        <meta name="author" content={author || defaultAuthor} />
        <meta name="keywords" content="web development, portfolio, react developer, full stack developer" />
        
        {/* Other Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#ffffff" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="google" content="notranslate" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google-site-verification" content="your-google-site-verification-code" />

        <link rel="canonical" href={sideUrl || siteUrl} />
      </Head>
      <DefaultSeo
        title={title}
        description={description}
        // Add more SEO-related configurations here
      />
    </>
  );
};

export default SEO;
