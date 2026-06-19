export const gallery = {
  name: "gallery",
  title: "Gallery Media",
  type: "document",
  fields: [
    { name: "title", title: "Media Title", type: "string" },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: ["Cafe", "Events", "Rigs", "Sim Racing"],
      },
    },
    { name: "image", title: "Image", type: "image", options: { hotspot: true } },
    { name: "isVideo", title: "Is it a Video?", type: "boolean" },
    { name: "videoUrl", title: "Video URL (YouTube/Vimeo/Direct link)", type: "url", hidden: ({ parent }: any) => !parent?.isVideo },
  ],
};
