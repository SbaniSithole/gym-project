import { servicesClass } from "@/utils/data/services";
import { motion } from "framer-motion";
import Image from "next/image";

const OurClasses = () => {
  return (
    <motion.div className="py-3">
      <div className="py-3">
        <motion.h3 className="uppercase font-bold font-mono text-center text-slate-100">
          Our classes
        </motion.h3>
        <motion.h1 className="uppercase font-bold font-sans text-center text-slate-100 text-2xl">
          Things we offer
        </motion.h1>
      </div>
      <motion.div className="flex gap-5 justify-center">
        {servicesClass.map((service) => (
          <motion.div className="card" key={service.id}>
            <div className="relative">
              <Image
                className="card-img"
                src={service.img}
                alt={service.name}
                width={1000}
                height={1000}
              />
              <div className="img-mask"></div>
            </div>
            <motion.div className="card-content capitalize p-2 pb-12">
              <span className="font-sans">{service.category}</span>
              <h4 className="font-sans">{service.name}</h4>
              <p className="font-sans text-sm text-slate-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor ut dolore facilisis
              </p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default OurClasses;
