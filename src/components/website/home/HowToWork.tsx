import React from "react";
import { Upload, Share2, CircleCheckBig, Fan } from "lucide-react";
import HowToWorkCard from "@/components/ReusableSection/HowToWorkCard";
import { Button } from "@/components/ui/button";

const HowToWork = () => {
  return (
    <section className="my-12 md:my-16" id='how-it-work'>
      <div className="container  mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <span className="mb-4 inline-block rounded-2xl bg-[#ECFECD] px-5 py-2 text-sm font-medium text-[#65A30D]">
            How It Works
          </span>

          <h3 className="text-3xl md:text-4xl font-semibold leading-[150%]">
            Seamless <span className="text-[#65A30D]">Automation</span> in Four
            Steps
          </h3>

          <p className="mt-3 mb-15 max-w-2xl text-[#5D665E]">
            Experience the future of yacht listing management with our intuitive
            AI-powered workflow
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <HowToWorkCard
            step="01"
            title="Upload Listing"
            description="Simply upload yacht images and basic details to our secure platform."
            icon={<Upload size={22} />}
          />

          <HowToWorkCard
            step="02"
            title="Add Details"
            description="Fill in pricing, features, and availability information."
            icon={<Fan size={22} />}
          />

          <HowToWorkCard
            step="03"
            title="Review & Approve"
            description="Check everything carefully before publishing your listing."
            icon={<Share2 size={22} />}
          />

          <HowToWorkCard
            step="04"
            title="Go Live"
            description="Your yacht listing is live and ready for customers."
            icon={<CircleCheckBig size={22} />}
          />
        </div>
        <div className="mt-10 flex justify-center">
          <Button className="bg-[#5A50F5] cursor-pointer py-3! text-base rounded-3xl">
            Start Free Trial
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowToWork;
