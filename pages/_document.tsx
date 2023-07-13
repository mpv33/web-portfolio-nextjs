import Document, { Html, Head, Main, NextScript } from "next/document";
import { userData } from "@/data";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
            rel="stylesheet"
          />
          <title>{`${userData?.name} Portfolio`}</title>
          <meta
            name="description"
           content={userData?.about}
          />
          <meta
            name="keywords"
            content={userData?.about}
          />
          <meta name="author" content={userData?.name} />
        </Head>
        <body className="bg-fixed bg-gradient-to-r from-green to-blue-500 dark:from-dark-500 dark:to-dark-700 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
