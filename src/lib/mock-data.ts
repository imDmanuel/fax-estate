import { PricingPlan, PropertyListing, CriticReview, AgentT } from "./types";
import house1 from "@/assets/images/house-1.jpg";
import house2 from "@/assets/images/house-2.jpg";
import { faker } from "@faker-js/faker";

export const listing: PropertyListing[] = [
  {
    _id: "1",
    slug: "rkjj",
    name: "Hermosa Casa al Norte",
    price: 12000,
    address: "288 Highgate Road, London",
    beds: 8,
    baths: 6,
    size: 2400,
    rating: 3.5,
    image: house1,
    featured: true,
    listingType: "For Rent",
    type: "Garden House",
    rooms: 5,
    garages: 3,
    originatingYear: 2022,
    facilities: {},
    agentId: "1",
    reviews: [],
  },
  {
    _id: "2",
    slug: "djhfj",
    name: "Hermosa Casa al Norte",
    price: 12000,
    address: "288 Highgate Road, London",
    beds: 8,
    baths: 6,
    size: 2400,
    rating: 4.5,
    image: house1,
    featured: false,
    listingType: "For Rent",
    type: "Garden House",
    rooms: 5,
    garages: 3,
    originatingYear: 2022,
    facilities: {},
    agentId: "1",
    reviews: [],
  },
  {
    _id: "3",
    slug: "ljflkdjfkld",
    name: "Hermosa Casa al Norte",
    price: 12000,
    address: "288 Highgate Road, London",
    beds: 8,
    baths: 6,
    size: 2400,
    rating: 3.0,
    image: house1,
    featured: false,
    listingType: "For Rent",
    type: "Garden House",
    rooms: 5,
    garages: 3,
    originatingYear: 2022,
    facilities: {},
    agentId: "2",
    reviews: [],
  },
];

export const reviews: CriticReview[] = [
  {
    reviewerImage: "",
    name: "",
    date: "",
    content: "",
    rating: 0,
    _id: "",
  },
];

export const agents: AgentT[] = new Array(20).fill(Math.random()).map(() => {
  return {
    _id: faker.string.nanoid(4),
    name: faker.person.fullName(),
    image: faker.image.avatar(),
    designation: faker.helpers.arrayElement([
      "Real Estate Broker",
      "Sales Executive",
      "Commercial Broker",
      "Salesperson",
      "Buying Agent",
      "Real Estate Broker",
    ]),
    socials: {
      facebook: `https://facebook.com/${faker.person.firstName()}`,
    },
    listingCount: faker.number.int({ min: 1, max: 20 }),
    yearJoined: faker.number.int({ min: 2000, max: 2024 }),
    bio: faker.person.bio(),
    from: faker.location.city(),
    language: "English",
    phone: faker.phone.number(),
  };
});

export const pricingPlans: PricingPlan[] = [
  {
    name: "Basic",
    description: "Basic listing submission, active for 30 days",
    price: "$259.00",
    features: [
      "All operating supported",
      "20 property listings",
      "30 days availablility",
      "feature properties",
      "24/7 full support",
    ],
  },
  {
    name: "Professional",
    description: "Professional listing submission, active for 60 days",
    price: "$699.00",
    features: [
      "All operating supported",
      "30 property listings",
      "60 days availablility",
      "feature properties",
      "24/7 full support",
    ],
  },
  {
    name: "Business",
    description: "Business listing submission, active for 90 days",
    price: "$999.00",
    features: [
      "All operating supported",
      "40 property listings",
      "90 days availablility",
      "feature properties",
      "24/7 full support",
    ],
  },
];
