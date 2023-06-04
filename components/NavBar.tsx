import Image from "next/image";
import { items } from "../utils/data/NavItems";
import Link from "next/link";
import { icons } from "../utils/data/NavIcons";
import { useEffect, useState } from "react";
const NavBar = () => {
  const [bg, setBg] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBg(true);
      } else {
        setBg(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {
        return null;
      });
    };
  }, []);
  return (
    <div
      className={`w-full navbar flex items-center justify-center fixed z-50 ${
        bg ? "h-20 bg-dark" : "h-14"
      }`}
    >
      <div className="nav_container flex justify-between w-full relative">
        <div className="nav_img">
          <Link href={"/"}>
          <Image
            src={"/assets/images/logo.png"}
            width={40}
            height={40}
            alt="navbar logo"
          />
          </Link>
        </div>
        <div className="nav-items flex items-center">
          {items.map((item) => (
            <div className="nav-item mx-3" key={item.id}>
              <Link href={item.url} className="font-sans">
                {item.name}
              </Link>
            </div>
          ))}
        </div>
        <div className="nav-items flex items-center">
          {icons.map((icon) => (
            <div className="nav-icon px-3" key={icon.id}>
              <Link href={icon.url}>
                <i className={icon.icon}></i>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
