// types/subscription.ts
export interface SubscriptionPlan {
  _id: string;
  name: string;
  price: number;
  billingCycle: string;
  isActive: boolean;
  features: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  popular?: boolean;
  featured?: boolean;
  tagline?: string;
  cta?: string;
  period?: string;
  allowedListings?:string;

}

export interface ApiResponse {
  status: boolean;
  message: string;
  data: SubscriptionPlan[];
}