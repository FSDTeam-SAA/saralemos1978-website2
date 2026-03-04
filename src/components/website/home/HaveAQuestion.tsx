import HaveQuestion from "@/components/ReusableSection/HaveQuestion";
import React from "react";

const HaveAQuestion = () => {
  return (
    <section className="my-10 md:my-16" id="contact">
      <div className="container mx-auto">
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
