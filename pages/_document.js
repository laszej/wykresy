import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet" />
        <style>
         {`@import url("https://fonts.googleapis.com/css2?family=Ubuntu&display=swap");
          body {
        font-family: 'Ubuntu', sans-serif;
        }`}
  </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;