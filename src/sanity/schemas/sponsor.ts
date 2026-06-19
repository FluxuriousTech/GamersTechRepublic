export const sponsor = {
  name: "sponsor",
  title: "Sponsor/Partner",
  type: "document",
  fields: [
    { name: "name", title: "Brand Name", type: "string" },
    { name: "logo", title: "Brand Logo", type: "image", options: { hotspot: true } },
    { name: "websiteUrl", title: "Website URL", type: "url" },
  ],
};
