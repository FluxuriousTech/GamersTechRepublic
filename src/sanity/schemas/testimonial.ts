export const testimonial = {
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    { name: "name", title: "User Name", type: "string" },
    { name: "role", title: "Role/Title (e.g. Esports Player)", type: "string" },
    { name: "feedback", title: "Feedback Content", type: "text" },
    { name: "rating", title: "Rating (1-5)", type: "number", validation: (Rule: any) => Rule.min(1).max(5) },
  ],
};
