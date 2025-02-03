import Header from "@/components/header";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased ">
        <Header/>
        <div className="w-full grid place-content-center">
        <Main />
        <NextScript />
        </div>
      </body>
    </Html>
  );
}
