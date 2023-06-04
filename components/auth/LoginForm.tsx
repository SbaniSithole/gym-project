import React, { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Loader from "../Loader";
import { signIn } from "next-auth/react";
import Link from "next/link";
function LoginForm() {
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    signIn("credentials", {
      email: form.get("email"),
      password: form.get("password"),
      callbackUrl: "/dashboard",
    })
      .then((v) => {
        console.log(v);
      })
      .catch((err) => console.log(err.message));
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
          <input type="email" placeholder="Email" name="email" required />
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          <span style={{ color: "#f2f2f2" }} className="font-sans">
            Need Account ?{" "}
            <Link
              style={{ color: "#0ae1ef" }}
              href={"/register"}
              className="font-sans font-semibold"
            >
              Register
            </Link>
          </span>
          <button className="form-btn" type="submit">
            Login
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default LoginForm;
