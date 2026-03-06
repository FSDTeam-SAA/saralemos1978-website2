import HaveQuestion from "@/components/ReusableSection/HaveQuestion";
import React from "react";

const HaveAQuestion = () => {
  return (
    <section className="my-10 md:my-16" id="contact">
      <div className="container mx-auto">
            <span className="block w-14 h-0.5 bg-[#FF9002] mb-3" />

        <h2 className=" text-3xl md:text-4xl text-[#E8662A] mb-6 font-bold text-start">
          Holmes on Board — Helping you navigate Asia’s yachting world with
          confidence.
        </h2>
        <HaveQuestion
          title="Still Have "
          span="Question?"
          description="Ready to discuss your yacht or start planning your next move?
I’m always available for a conversation and happy to offer straightforward, practical advice."
          buttonText="Contact Us"
        />
      </div>
    </section>
  );
};

export default HaveAQuestion;
