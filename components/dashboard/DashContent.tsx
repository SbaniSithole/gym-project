import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const DashContent = () => {
  const { data } = useSession();
  console.log(data?.user);
  return (
    <div className="bg-neutral-200">
      <div className="dash-card">
        <div className="card-img">
          <Image
            src={"/assets/images/img/classes/class-1.jpg"}
            width={160}
            height={160}
            alt="class 1"
          />
        </div>
        <div className="das-card-content">
          <h2>{data?.user.name}</h2>
        </div>
      </div>
    </div>
  );
};

export default DashContent;
