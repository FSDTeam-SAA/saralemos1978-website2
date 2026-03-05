import { MoveRight } from "lucide-react";
import React from "react";

const reasons = [
  {
    title: "Industry Expertise",
    description:
      "Over 15 years of experience in the Southeast Asian yacht industry with trusted regional insight.",
  },
  {
    title: "Personalized Service",
    description:
      "Every client receives tailored attention and expert guidance based on their individual goals.",
  },
  {
    title: "Strong Network",
    description:
      "Extensive connections with yacht owners, charter operators, and key industry leaders.",
  },
  {
    title: "Market Intelligence",
    description:
      "Up-to-date market data and pricing insights to secure competitive and informed deals.",
  },
  {
    title: "Client-First Approach",
    description:
      "From first consultation to final transaction, your satisfaction is always the priority.",
  },
];

const AboutWhyWorkUs = () => {
  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8 border-t-4 border-orange-500"
      aria-labelledby="why-work-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-14">
          <h2
            id="why-work-heading"
            className="text-3xl md:text-4xl font-bold text-gray-800"
          >
            Why Work <span className="text-orange-500">With Holmes On Board</span>
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-sm md:text-base text-gray-600">
            Discover what sets Holmes On Board apart in yacht brokerage,
            representation, and advisory services.
          </p>
        </header>

        {/* Reasons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 ">
          {reasons.map((reason, index) => (
            <React.Fragment key={index}>
              <article className="text-center flex items-center justify-center gap-2">
                <div>

                <span className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full border-2 border-orange-500 text-lg font-bold text-orange-500">
                  {index + 1}
                </span>

                <h3 className="mb-2 text-base font-semibold text-orange-600">
                  {reason.title}
                </h3>

                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
                </div>
              {/* Arrow Divider (desktop only) */}
              {index < reasons.length - 1 && (
                <div
                  className="hidden lg:flex items-center justify-center"
                  aria-hidden="true"
                >
                  <MoveRight className="h-5 w-10 text-orange-500" />
                </div>
              )}
              </article>

            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutWhyWorkUs;
