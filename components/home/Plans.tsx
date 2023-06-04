import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
const Plans = () => {
  const [plans, setPlan] = useState<any>([]);
  useEffect(() => {
    async function getData() {
      const data = await fetch("/api/plans");
      const results = await data.json();
      setPlan(results);
    }
    getData();
  }, []);
  console.log(plans);
  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "ZAR",
  });
  const path = useRouter();

  return (
    <motion.div className="p-4 pt-8">
      <h4 className="text-center text-slate-100 font-sans font-bold text-2xl">
        Pricing Plans
      </h4>
      <div className="plan-container flex gap-3 justify-around pt-5">
        {plans.map(
          (plan: { duration: number; price: number; name: string,id:number }) => (
            <motion.div className="plan-card p-7 text-center" key={plan.id}>
              <h5>
                {plan?.duration} {plan?.duration > 1 ? "months" : "month"}
              </h5>
              <h5>{currencyFormatter.format(plan?.price)}</h5>
              <h5 className="capitalize">{plan?.name}</h5>
              <button
                className="btn-plan"
                onClick={() => path.push("/register")}
              >
                Join now
              </button>
            </motion.div>
          )
        )}
      </div>
    </motion.div>
  );
};

export default Plans;
