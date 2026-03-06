import { MoveRight } from "lucide-react";
import React from "react";

const reasons = [
  {
    title: "Independent & transparent",
    description: "No big-agency pressure. Just honest, expert advice.",
  },
  {
    title: "Asia-Pacific specialist",
    description:
      "Decades of on-water and commercial experience in Thailand and the region.",
  },
  {
    title: "High-impact marketing",
    description:
      "Every listing benefits from strategic content, video, and social distribution.",
  },
  {
    title: "Strong industry network",
    description:
      "From surveyors to shipyards, I work only with proven professionals.",
  },
  {
    title: "ClieRelationship-driven",
    description:
      "My clients stay for years; many have become friends.",
  },
];

const AboutWhyWorkUs = () => {
  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-0 "
      aria-labelledby="why-work-heading"
    >
      <div className="container  mx-auto">
        {/* Section Header */}
        <header className="text-center mb-14">
              <span className="block w-14 h-0.5 mx-auto bg-[#FF9002] mb-3" />

          <h2
            id="why-work-heading"
            className="text-3xl md:text-4xl font-bold text-[#02323C]"
          >
            Why Work <span className="text-orange-500">With Holmes On Board</span>
          </h2>
          {/* <p className="mt-3 max-w-2xl mx-auto text-sm md:text-base text-gray-600">
            Discover what sets Holmes On Board apart in yacht brokerage,
            representation, and advisory services.
          </p> */}
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
