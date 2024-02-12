const latestListingQuery = `*[_type=="property"]{
    ...,
    "imageUrl": image.asset->url
  }`;
