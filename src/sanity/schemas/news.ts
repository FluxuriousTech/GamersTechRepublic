export const news = {
  name: "news",
  title: "News & Updates",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "category", title: "Category", type: "string", options: { list: ["CS2", "Valorant", "Sim Racing", "PC Hardware", "Community Updates", "Product Launches"] } },
    { name: "publishedAt", title: "Published At", type: "datetime" },
    { name: "excerpt", title: "Excerpt", type: "text" },
    { name: "body", title: "Body", type: "text" },
    { name: "image", title: "Featured Image", type: "image", options: { hotspot: true } },
    { name: "featured", title: "Featured Story", type: "boolean" },
    { name: "trending", title: "Trending News", type: "boolean" },
  ],
};
