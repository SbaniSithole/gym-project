import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <head>
        <link rel="icon" href="/assets/images/logo.png" />
        <script src="https://cdn.tailwindcss.com"></script>

        <script
          src="https://kit.fontawesome.com/4563df8ba3.js"
          crossOrigin="anonymous"
        ></script>
      </head>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
