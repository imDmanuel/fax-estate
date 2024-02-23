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
  propertyImagesUrl?: string[];
  featuredImage?: string;
  featuredImageUrl?: string;
  floorPlansUrl?: string;
  propertyImages?: {
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
  criticReviews: ICriticReview[];
  mapLocation: {
    lng: number;
    _type: "geopoint";
    lat: number;
  };
  youtubeVideo?: {
    video: {
      publishedAt: string;
      description: string;
      id: string;
      thumbnails: string[];
      title: string;
    };
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

export interface ICriticReview {
  _id: string;
  _type: "criticReview";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;

  name: string;
  rating: number;
  content: string;
  date: string;

  // Optional reviewer image
  reviewerImage?: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
  reviewerImageUrl?: string | null;
}
