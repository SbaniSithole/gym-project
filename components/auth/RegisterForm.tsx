import { motion } from "framer-motion";
import Image from "next/image";
import React, { FormEvent, useState } from "react";
import Loader from "../Loader";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import Link from "next/link";
const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const path = useRouter();
  const handleSubmit = async (e: FormEvent) => {
    const form = new FormData(e.target as HTMLFormElement);
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({
        name: form.get("name"),
        surname: form.get("surname"),
        email: form.get("email"),
        password: form.get("password"),
      }),
    });
    const data = await res.json();

    setTimeout(() => {
      setLoading(false);
    }, 3000);
    if (data.status) {
      await signIn("credentials", {
        email: form.get("email"),
        password: form.get("password"),
        callbackUrl: "/dashboard",
      });
    }
  };
  return (
    <div className="register relative flex items-center justify-center">
      <motion.div>
        <form
          onSubmit={handleSubmit}
          className="form text-center flex flex-col items-center relative"
        >
          {loading && <Loader />}
          <Image
            width={82}
            height={82}
            className="relative"
            alt="logo"
            src={"/assets/images/logo.png"}
          />

          <h1 className="text-slate-100 font-sans font-bold text-2xl pb-6">
            Join Now
          </h1>
          <input type="text" name="name" placeholder="First Name" required />
          <input type="text" name="surname" placeholder="Last Name" required />
          <input type="email" placeholder="Email" name="email" required />
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          <span style={{ color: "#f2f2f2" }} className="font-sans">
            Already registered?{" "}
            <Link
              style={{ color: "#0ae1ef" }}
              href={"/login"}
              className="font-sans font-semibold"
            >
              Login
            </Link>
          </span>
          <button className="form-btn" type="submit">
            Register
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default RegisterForm;
