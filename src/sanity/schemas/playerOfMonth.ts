export const playerOfMonth = {
  name: "playerOfMonth",
  title: "Player of the Month",
  type: "document",
  fields: [
    { name: "playerName", title: "Player Name", type: "string" },
    { name: "instagram", title: "Instagram Handle", type: "string" },
    { name: "month", title: "Month (e.g. October 2026)", type: "string" },
    {
      name: "game",
      title: "Game",
      type: "string",
      options: {
        list: ["CS2", "Valorant", "Sim Racing"],
      },
    },
    { name: "rank", title: "In-Game Rank", type: "string" },
    { name: "score", title: "Primary Stat (e.g. 2.1 K/D)", type: "string" },
    {
      name: "stats",
      title: "Game Specific Stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Label (e.g. Headshot %)", type: "string" },
            { name: "value", title: "Value (e.g. 64%)", type: "string" },
          ],
        },
      ],
    },
    { name: "image", title: "Player Image", type: "image", options: { hotspot: true } },
    { name: "featured", title: "Currently Active Featured POTM", type: "boolean" },
  ],
};
