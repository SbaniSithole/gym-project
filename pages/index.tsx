import HomePage from "@/components/home/HomePage";
import OurClasses from "@/components/home/OurClasses";
import Plans from "@/components/home/Plans";
import NavBar from "@/components/NavBar";
import { signOut, useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
export default function Home() {
  const { pathname } = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Head>
        <title>Home | Join Now</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar />
      <HomePage />

      <OurClasses />
      <Plans />
    </>
  );
}