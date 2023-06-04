import NavBar from "@/components/NavBar";
import RegisterForm from "@/components/auth/RegisterForm";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";

const register = () => {
  const path = useRouter();

  return (
    <div>
      <Head>
        <title>Home -Register | The Daily Grind Gym</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar />
      <RegisterForm />
    </div>
  );
};

export default register;
