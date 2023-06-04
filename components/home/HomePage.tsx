import { heroes } from "@/utils/data/ImageObjects";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
const HomePage = () => {
  const [image, setImage] = useState(heroes[0]);
  const [direction, setDirection] = useState(0);
  const changeBg = (x: number) => {
    if (x < image.id) {
      setDirection(1);
    } else {
      setDirection(-1);
    }
    setImage(heroes[x]);
  };

  const varients = {
    initial: (direction: number) => {
      return {
        x: direction > 0 ? 100 : -100,
        opacity: 0,
      };
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        x: direction > 0 ? -100 : 100,
        opacity: 0,
      };
    },
  };
  const height = (100 * 634) / 1366;
  return (
    <div style={{ outline: "none", overflow: "hidden" }}>
      <>
        <motion.div
          key={image.id}
          variants={varients}
          initial="initial"
          animate="animate"
          exit="exit"
          custom={direction}
          className="home relative"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(12, 12, 12, 0.52), rgba(12, 12, 12, 0.52)),url(${image.img})`,
            height: `${height}vw`,
          }}
        >
          <div className="">
            <motion.div
              className="header-info absolute bottom-1/4 right-3 p-4 w-1/2"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                ease: "easeInOut",
                restSpeed: 7,
                delay: 0.6,
              }}
            >
              <h2 className="uppercase font-sans font-semibold text-3xl ">
                {image.name}
              </h2>
              <p className="font-sans text-sm">{image.details}</p>
            </motion.div>
            <div className="container-bg absolute bottom-3 right-2 flex">
              {heroes.map((hero) => (
                <div
                  className={`img-card m-2 relative ${
                    hero.id === image.id && "active-card"
                  }`}
                >
                  <Image
                    onClick={() => changeBg(hero.id - 1)}
                    src={hero.img}
                    alt="image"
                    width={220}
                    height={(220 * 634) / 1366}
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </>
    </div>
  );
};

export default HomePage;
