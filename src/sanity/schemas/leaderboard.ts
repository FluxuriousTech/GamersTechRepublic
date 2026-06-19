export const leaderboard = {
  name: "leaderboard",
  title: "Leaderboard Rank",
  type: "document",
  fields: [
    { name: "playerName", title: "Player Name", type: "string" },
    { name: "rank", title: "Current Rank", type: "number" },
    {
      name: "game",
      title: "Game",
      type: "string",
      options: {
        list: ["CS2", "Valorant", "Sim Racing"],
      },
    },
    { name: "score", title: "Score / Rating", type: "string" },
    { name: "winRate", title: "Win Rate (%)", type: "number" },
    { name: "kdr", title: "K/D Ratio", type: "number" },
    {
      name: "rankMovement",
      title: "Rank Movement",
      type: "string",
      options: {
        list: [
          { title: "Up", value: "up" },
          { title: "Down", value: "down" },
          { title: "Stable", value: "stable" },
        ],
      },
    },
    { name: "statValue", title: "Secondary Stat (e.g. HS% or Lap Time)", type: "string" },
  ],
};
