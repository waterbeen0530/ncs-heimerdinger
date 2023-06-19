import Header from "@/components/common/header";
import Layouts from "@/components/layouts";
import "@/styles/globals.css";
import styled from "@emotion/styled";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layouts>
      <Header />
      <Component {...pageProps} />
      <Background src="/imgs/main/background.png" />
    </Layouts>
  );
}

const Background = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 620px;
`;
