"use client";
import "@/styles/globals.css";
import "@/styles/animation.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import NextNProgress from "nextjs-progressbar";
interface sessionProps {
  session: Session;
}

export default function App(
  { Component, pageProps }: AppProps,
  { session }: sessionProps
) {
  return (
    <SessionProvider session={session} refetchInterval={5 * 60}>
      <NextNProgress color="#0ae1ef" />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
