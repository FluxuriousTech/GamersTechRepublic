export const pcBuild = {
  name: "pcBuild",
  title: "PC Build",
  type: "document",
  fields: [
    { name: "name", title: "Build Name", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "name" } },
    {
      name: "priceCategory",
      title: "Price Category",
      type: "string",
      options: {
        list: [
          { title: "Under 1 Lakh", value: "under-1l" },
          { title: "1L to 2L", value: "1l-2l" },
          { title: "2L to 4L", value: "2l-4l" },
          { title: "4L to 6L", value: "4l-6l" },
          { title: "6L+", value: "6l-plus" },
        ],
      },
    },
    { name: "price", title: "Price (INR)", type: "number" },
    { name: "cpu", title: "CPU", type: "string" },
    { name: "gpu", title: "GPU", type: "string" },
    { name: "ram", title: "RAM", type: "string" },
    { name: "motherboard", title: "Motherboard", type: "string" },
    { name: "storage", title: "Storage", type: "string" },
    { name: "psu", title: "Power Supply", type: "string" },
    { name: "cooler", title: "CPU Cooler", type: "string" },
    { name: "usage", title: "Best For / Usage", type: "string" },
    { name: "image", title: "Build Image", type: "image", options: { hotspot: true } },
  ],
};
