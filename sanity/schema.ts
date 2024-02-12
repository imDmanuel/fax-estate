import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import criticReview from "./schemas/critic-review";
import agent from "./schemas/agent";
import property from "./schemas/property";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [agent, property, criticReview, blockContent],
};
