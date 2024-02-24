import { Prisma } from "@prisma/client";
import { Agent } from "./query-types";
import { getUser } from "./utils";

export interface PropertyListing {
  _id: string;
  slug: string;
  name: string;
  address: string;
  price: number;
  featured: boolean;
  listingType: "For Rent" | "For Sale";
  rating: number;
  image: any;
  agentId: Agent["_id"];

  beds?: number;
  baths?: number;
  size?: number;
  uploadedDate?: Date;
  description?: string;
  rooms?: number;
  garages?: number;
  type?: string;
  originatingYear?: number;
  facilities?: {
    airConditioning?: boolean;
    balcony?: boolean;
    internet?: boolean;
    lawn?: boolean;
    dishwasher?: boolean;
    bedding?: boolean;
    cableTV?: boolean;
    gym?: boolean;
    parking?: boolean;
    pool?: boolean;
    fridge?: boolean;
    swimmingPool?: boolean;
    agent?: string;
  };
  floorPlans?: string;
  reviews: ICriticReview[];
}

export interface ICriticReview {
  _id: string;
  reviewerImage: string;
  name: string;
  date: string;
  content: string;
  rating: number;
}

export interface AgentT {
  _id: string;
  name: string;
  designation: string;
  image: string;
  socials?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
  };
  listingCount: number;
  yearJoined: number;
  from: string;
  bio: string;
  language: string;
  phone: string;
}

export type AgentDesignations =
  | "Real Estate Broker"
  | "Sales Executive"
  | "Commercial Broker"
  | "Salesperson"
  | "Buying Agent";

export type PricingPlan = {
  name: string;
  description: string;
  price: string;
  features: string[];
};

export type SessionData = {
  user: Awaited<Prisma.UserSelect>;
  expires: string;
};
