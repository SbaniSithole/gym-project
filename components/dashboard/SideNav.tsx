import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SideNav = () => {
  const links = [
    {
      to: "/home",
      name: "home",
    },
    {
      to: "/classes",
      name: "classes",
    },
    {
      to: "/trainers",
      name: "trainers",
    },
    {
      to: "/payment",
      name: "payment",
    },
  ];
  return (
    <div className="side-nav absolute w-full h-screen flex flex-col justify-between">
      <div>
        <div className="flex justify-center">
          <Image
            src={"/assets/images/logo.png"}
            alt="logo"
            width={300}
            height={300}
          />
        </div>
        <div className="links px-4 py-8">
          {links.map((link) => (
            <div className="link h-11">
              <Link
                href={"/dashboard" + link.to}
                className="text-slate-50 font-sans capitalize font-medium text-lg"
              >
                {link.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="side-nav-btn">
        <button
          className="h-10 font-sans text-base font-medium text-slate-50"
          onClick={() => signOut({ callbackUrl: "/login" })}
        >
          SignOut
        </button>
      </div>
    </div>
  );
};

export default SideNav;
