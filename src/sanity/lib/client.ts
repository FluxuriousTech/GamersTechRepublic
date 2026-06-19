import { createClient } from "next-sanity";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "mock-project-id";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-05-03";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages but using ISR or tag-based revalidation
});

// A wrapper query function that yields mock data if Sanity is not configured or fails
export async function sanityFetch<T>({
  query,
  params = {},
  fallback,
}: {
  query: string;
  params?: Record<string, any>;
  fallback: T;
}): Promise<T> {
  if (projectId === "mock-project-id" || !process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    // Return mock data during local development without Sanity credentials
    return fallback;
  }
  try {
    const data = await client.fetch<T>(query, params);
    return data || fallback;
  } catch (error) {
    console.warn("Sanity fetch failed, using fallback data:", error);
    return fallback;
  }
}
