/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { Check } from "lucide-react";
import Subscriptioncard from "@/components/ReusableSection/Subscriptioncard";
import { useQuery } from "@tanstack/react-query";
import { getSubscription } from "@/lib/api";
import { SubscriptionPlan, ApiResponse } from "@/lib/type/subscription";
import { useSession } from "next-auth/react";
import { usePayment, PaymentVariables } from "@/lib/hooks/usePayment";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import ContactModal from "@/components/ReusableSection/ContactModal";

const Subscription = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const { mutate: subscribe, isPending: isSubscribing } = usePayment();
  const router = useRouter();

  const {
    data: response,
    isLoading,
    isError,
  } = useQuery<ApiResponse>({
    queryKey: ["subscription"],
    queryFn: getSubscription,
  });

  const handleSubscribe = (plan: SubscriptionPlan) => {
    if (!session?.user) {
      toast.error("Please login to subscribe");
      router.push("/login");
      return;
    }

    // Safe extraction of userId
    const user = session.user as { id?: string; _id?: string; email?: string };
    const userId = user?.id || user?._id;

    if (!userId) {
      toast.error("User ID not found. Please re-login.");
      return;
    }

    const variables: PaymentVariables = { userId: userId, planId: plan._id };

    subscribe(variables, {
      onSuccess: (data) => {
        toast.success("Subscription initialized successfully!");

        const url = data?.data?.url;
        if (url) {
          window.open(url, "_blank");
        }
      },

      onError: (error: any) => {
        toast.error(error.message || "Failed to initialize subscription");
      },
    });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (isError || !response?.status) {
    return (
      <div className="text-center py-20 px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Oops! Something went wrong.
        </h2>
        <p className="text-gray-600">
          We couldn&apos;t load the subscription plans. Please try again later.
        </p>
      </div>
    );
  }

  const plans = response.data || [];

  // Find the highest price to mark as "Most Popular"
  const maxPrice = Math.max(...plans.map((p: SubscriptionPlan) => p.price), 0);

  // Sort plans by price (optional, but usually looks better)
  // const sortedPlans = [...plans].sort((a, b) => a.price - b.price);

  // Decorate plans with UI-specific flags
  const decoratedPlans: SubscriptionPlan[] = plans.map((plan, index) => ({
    ...plan,
    popular: index === 1,
    featured: plan.price === maxPrice && plan.price > 0,
    tagline:
      plan.price === maxPrice
        ? "Our most comprehensive plan"
        : "Great for getting started",
    cta: plan.price === maxPrice ? "Get Started" : "Get Started",
    period: " month",
  }));
  const subscriptionPlan: SubscriptionPlan = {
    _id: "64a7b1c2e8f9d2c3e5f6a7b2",
    name: "Enterprise",
    price: 0, // Custom pricing - displayed as "Custom"
    billingCycle: "contact us",
    isActive: true,
    features: [
      "Unlimited listings",
      "White-label solution",
      "Dedicated account manager",
      "Custom AI training",
      "Custom Reports",
      "Advanced security features",
      "SLA guarantee",
    ],
    createdAt: "2023-07-01T10:00:00.000Z",
    updatedAt: "2023-12-15T14:30:00.000Z",
    __v: 1,
    popular: false,
    tagline: "For large organizations",
    cta: "Contact Sales",
    period: "month",
  };

  return (
    <div className="font-sans bg-gray-50 py-20 px-4 md:px-8" id="pricing">
      <div className="container  mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 ">
          <span className="bg-[#EAE9FF] py-2 px-6 rounded-full mb-1.5">
            Pricing
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2E266D] mb-2">
            Simple,<span className="text-[#65A30D]">Transparent</span> Pricing
          </h1>
          <p className="text-base text-[#5D665E] leading-[150%] font-normal  max-w-3xl mx-auto">
            Choose the perfect plan for your needs. All plans include premium
            features.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 items-stretch">
          {decoratedPlans.map((plan) => (
            <div key={plan._id}>
              <Subscriptioncard
                plan={plan}
                onSubscribe={handleSubscribe}
                isLoading={isSubscribing}
              />
            </div>
          ))}
          <div
            className={`
                relative h-full transition-all duration-300
                ${subscriptionPlan ? "" : "lg:scale-105 lg:-translate-y-4 "}
              `}
          >
            {/* Popular Badge */}
            {/* {subscriptionPlan && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-[#B5ED5B] from-blue-600 to-purple-600 text-[#343A40] text-sm font-semibold py-2 px-6 rounded-full shadow-lg whitespace-nowrap">
                      Most Popular
                    </div>
                  </div>
                )} */}

            {/* Pricing Card */}
            <div
              className={`
                  h-full rounded-2xl border-2 overflow-hidden flex flex-col
                  ${
                    subscriptionPlan
                      ? " bg-white border-gray-200 shadow-lg"
                      : "bg-[#5A50F5] border-blue-300 shadow-2xl"
                  }
                `}
            >
              {/* Card Header */}
              <div
                className={`
                    p-8 text-center
                    ${subscriptionPlan ? "bg-gray-50" : " bg-[#5A50F5]"}
                  `}
              >
                <h3
                  className={`text-2xl leading-[120%] font-semibold mb-1 ${subscriptionPlan ? " text-[#3D483F]" : " text-white"}`}
                >
                  {subscriptionPlan.name}
                </h3>
                <p
                  className={`text-base leading-[150%] font-normal mb-5 ${subscriptionPlan ? " text-[#3D483F]" : "text-white"}`}
                >
                  {subscriptionPlan.tagline}
                </p>

                {/* Price Section */}
                <div className="mb-6">
                  <div className="flex flex-col  text-center items-center justify-center">
                    <span
                      className={`
                          text-2xl md:text-3xl font-bold
                          ${subscriptionPlan ? "text-[#5B4FFF] " : " text-[#B5ED5B]"}
                        `}
                    >
                      Customs
                    </span>
                    {subscriptionPlan && (
                      <span
                        className={`${subscriptionPlan ? "text-white" : "text-[#2C2668]"} ml-2 text-lg`}
                      >
                        {subscriptionPlan.period}
                      </span>
                    )}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => setIsOpen(true)}
                  disabled={isLoading}
                  className={`
                      w-full py-4 rounded-4xl font-semibold text-lg transition-all duration-300
                      ${isLoading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
                      ${
                        subscriptionPlan
                          ? " bg-[#5A50F5] text-white hover:bg-gray-800"
                          : "bg-[#B5ED5B] text-black hover:opacity-90"
                      }
                    `}
                >
                  Contact Sales
                </button>
              </div>

              {/* Features List */}
              <div className="p-8 flex-grow">
                <div className="space-y-4">
                  {subscriptionPlan.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div
                        className={`
                            flex-shrink-0 w-6 h-6  flex items-center justify-center mr-3 mt-0.5
                          
                          `}
                      >
                        <Check
                          className={`    ${
                            subscriptionPlan
                              ? "text-[#5B4FFF]"
                              : " text-[#B5ED5B]"
                          }`}
                        />
                      </div>
                      <span
                        className={`text-gray-700    ${
                          subscriptionPlan ? "text-black" : "text-white"
                        }`}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider for non-subscription cards */}
              {!subscriptionPlan && (
                <div className="px-8 pb-8">
                  <div className="border-t border-gray-200"></div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 pt-8  ">
          <p className="text-gray-600">
            All plans include SSL encryption, regular backups, and 99.9% uptime
            guarantees.
          </p>
          {/* <div className="flex flex-wrap justify-center items-center mt-4 gap-6 text-sm text-gray-500">
                        <span className="flex items-center">
                            <Shield className="w-4 h-4 mr-2" />
                            Enterprise-grade security
                        </span>
                        <span className="flex items-center">
                            <Zap className="w-4 h-4 mr-2" />
                            24/7 monitoring
                        </span>
                        <span className="flex items-center">
                            <Users className="w-4 h-4 mr-2" />
                            Priority support
                        </span>
                    </div> */}
        </div>
      </div>

      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default Subscription;
