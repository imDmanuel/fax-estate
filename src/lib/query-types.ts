import { AgentDesignations } from "./types";

export interface Property {
  bathrooms: number;
  garages: number;
  livingRooms: number;
  listingType: string;
  originatingYear: number;
  _createdAt: string;
  name: string;
  featured: boolean;
  propertyImageUrl: string;
  floorPlansUrl: string;
  propertyImage: {
    asset: {
      _type: string;
      _ref: string;
    };
    _type: string;
  };
  floorPlans: {
    asset: {
      _ref: string;
      _type: string;
    };
    _type: string;
  };
  facilities: {
    swimmingPool: boolean;
    parking: boolean;
    airConditioning: boolean;
    gym: boolean;
    balcony: boolean;
    internet: boolean;
    lawn: boolean;
    dishwasher: boolean;
    bedding: boolean;
    cableTV: boolean;
    pool: boolean;
    fridge: boolean;
  };
  slug: {
    _type: string;
    current: string;
  };
  rating: number;
  bedrooms: number;
  uploadDate: string;
  _id: string;
  agent: {
    _ref: string;
    _type: string;
  };
  address: string;
  _rev: string;
  price: number;
  _updatedAt: string;
  _type: string;
  description: string; // Description is optional
  size: number; // Size is optional
}

export interface Agent {
  _id: string;
  _type: "agent";
  _rev: string;
  _createdAt: Date;
  _updatedAt: Date;
  name: string;
  designation: AgentDesignations; // Assuming this is fixed
  yearJoined: number;
  from: string;
  language: string;
  phone: string;
  bio: string;
  socials: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };
  image: {
    _type: string; // Likely "image"
    asset: {
      _type: string; // Likely "reference"
      _ref: string;
    };
  };
  imageUrl?: string; // Optional, might be null
  slug: {
    current: string;
    _type: string; // Likely "slug"
  };
}
