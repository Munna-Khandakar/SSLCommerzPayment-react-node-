import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <div id="__loader" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
