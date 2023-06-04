import DashContent from "@/components/dashboard/DashContent";
import SideNav from "@/components/dashboard/SideNav";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const Dashboard = () => {
  const { status, data } = useSession();

  const path = useRouter();
  if (status === "unauthenticated") {
    path.push("/login");
  }

  return (
    <div>
      <Head>
        <title>Vigor Fitness | Dashboard</title>
      </Head>
      <div className="dashboard">
        <div className="relative">
        <SideNav />
        </div>
        <DashContent />
      </div>
    </div>
  );
};

export default Dashboard;
