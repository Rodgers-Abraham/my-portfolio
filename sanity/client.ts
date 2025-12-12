import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "f0or7h12",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

// New: Image Builder Logic
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}