import { groq } from "next-sanity";

const latestListingQuery = groq`*[_type=="property"]{
    ...,
    "imageUrl": image.asset->url
  }`;
