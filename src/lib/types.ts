export interface PropertyListing {
  name: string;
  address: string;
  price: number;
  featured: boolean;
  status: "For Rent" | "For Sale";
  rating: number;

  beds: number;
  baths: number;
  size: number;
  uploadedDate: Date;
  description: string;
  id: string;
  rooms: number;
  bedrooms: number;
  type: string;
  originatingYear: Date;
  facilities: {
    airConditioning: boolean;
    balcony: boolean;
    internet: boolean;
    lawn: boolean;
    dishwasher: boolean;
    bedding: boolean;
    cableTV: boolean;
    gym: boolean;
    parking: boolean;
    pool: boolean;
    fridge: boolean;
    swimmingPool: boolean;
    agent: string;
  };
  floorPlans: string;
}
