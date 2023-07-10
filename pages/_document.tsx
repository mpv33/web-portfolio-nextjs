import Document, { Html, Head, Main, NextScript } from "next/document";

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
          <title>Mateshwari Portfolio</title>
          <meta
            name="description"
            content="Experienced IT Professional with over 3.5+ years of industry experience, specializing in full stack development and proficient in Data Structures & Algorithms. Skilled in utilizing ReactJs, Redux, Nodejs, NextJs, and ReactNative to build robust and scalable applications. JavaScript Developer with expertise in creating efficient and innovative solutions using frameworks such as ReactJs, Redux, Nodejs, ReactNative, and NextJs. Full Stack Freelance Developer and Frontend Elite Developer available for remote work."
          />
          <meta
            name="keywords"
            content="IT Professional, Full Stack Developer, ReactJs, Redux, Nodejs, NextJs, ReactNative, JavaScript Developer, Data Structures, Algorithms, Freelance Developer, Frontend Elite Developer, Remote Developer, Mateshwari, Software Engineer, Developer"
          />
          <meta name="author" content="Mateshwari" />
          {/* Add other meta tags as needed */}
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
