import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

/**
 * 기존 index.html 파일의 역할을 담당
 * children : 상위에서 받아온 컴포넌트
 * title : html header에 있는 title
 */

type Props = {
  children?: ReactNode; // 상위 컴포넌트는 이런 타입
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        {/* <Footer roo="hi" /> */}
        <Navbar title="" />
      </nav>
    </header>

    {children}

    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;
