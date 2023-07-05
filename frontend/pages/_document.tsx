import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Document, { Head, Html, Main, NextScript } from "next/document";
import i18nextConfig from "../next-i18next.config";

export default class MyDocument extends Document {
  render() {
    const { isProduction }: any = this.props;
    const currentLocale =
      this.props.__NEXT_DATA__.locale || i18nextConfig.i18n.defaultLocale;
    return (
      <Html lang={currentLocale}>
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
