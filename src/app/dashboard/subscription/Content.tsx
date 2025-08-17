"use client";
import StarterMonthlyPlan from "@/components/plans/StarterMonthlyPlan";
import StarterAnnualPlan from "@/components/plans/StarterAnnualPlan";
import ProMonthlyPlan from "@/components/plans/ProMonthlyPlan";
import ProAnnualPlan from "@/components/plans/ProAnnualPlan";
import StudioMonthlyPlan from "@/components/plans/StudioMonthlyPlan";
import StudioAnnualPlan from "@/components/plans/StudioAnnualPlan";
import { useState } from "react";

export default function Content() {
  const [type, setType] = useState<"monthly" | "annually">("monthly");

  return (
    <div className="pt-12 flex flex-col items-center">
      <h2 className="mb-2 text-4xl font-semibold text-center">
        Subscribe to <span className="text-gradient">Creobots</span>
      </h2>

      <p className="mb-8 text-lg font-light text-white/65 text-center">
        Upgrade your plan to unlock all features. Cancel anytime.
      </p>

      <div className="p-1.5 bg-white/10 rounded-full flex items-center">
        <button
          onClick={() => setType("monthly")}
          className={`${
            type === "monthly"
              ? "bg-gradient font-semibold text-black"
              : "text-white"
          } relative h-[40px] px-10 rounded-full flex items-center`}
        >
          <span className="relative z-10 w-full flex justify-center items-center gap-2">
            Monthly
          </span>
        </button>

        <button
          onClick={() => setType("annually")}
          className={`${
            type === "annually"
              ? "bg-gradient font-semibold text-black"
              : "text-white"
          } relative h-[40px] px-10 rounded-full flex items-center`}
        >
          <span className="relative z-10 w-full flex justify-center items-center gap-2">
            Annually{" "}
            <span className="absolute -top-6 -right-12 py-1 px-1.5 bg-red-400 rounded text-xs font-semibold uppercase whitespace-nowrap text-black">
              -10%
            </span>
          </span>
        </button>
      </div>

      <p className="mt-3 mb-12 text-sm font-light text-white/65 text-center">
        <span className="font-medium text-white">Save 10%</span> with our annual
        plans
      </p>

      {type === "monthly" ? (
        <div className="w-full grid grid-cols-3 gap-5">
          <StarterMonthlyPlan setType={setType} />
          <ProMonthlyPlan type={type} setType={setType} />
          <StudioMonthlyPlan type={type} setType={setType} />
        </div>
      ) : (
        <div className="w-full grid grid-cols-3 gap-5">
          <StarterAnnualPlan setType={setType} />
          <ProAnnualPlan type={type} setType={setType} />
          <StudioAnnualPlan type={type} setType={setType} />
        </div>
      )}
    </div>
  );
}
