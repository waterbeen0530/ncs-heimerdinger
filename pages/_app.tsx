import Layouts from "@/components/layouts";
import "@/styles/globals.css";
import styled from "@emotion/styled";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layouts>
      <Component {...pageProps} />
      <ToastContainer autoClose={1200} />
    </Layouts>
  );
}
