import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "0475tuo0",
  dataset: "production",
  apiVersion: "2022-09-17",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
