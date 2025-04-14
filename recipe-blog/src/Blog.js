
import React from "react";
import { Recipe } from "./Recipe";

const posts = [
  {
    title: "Fish Tacos",
    images: ["/1.jpg", "/1.jpg", "/1.jpg","/1.jpg"],
    ingredients: [
      { name: "Whitefish", amount: 1, measurement: "lb" },
      { name: "Cheese", amount: 1, measurement: "cup" },
      { name: "Iceberg Lettuce", amount: 2, measurement: "cups" },
      { name: "Tomatoes", amount: 2, measurement: "large" },
      { name: "Tortillas", amount: 3, measurement: "med" }
    ],
    steps: [
      "Cook the fish on the grill until hot.",
      "Place the fish on the 3 tortillas.",
      "Top them with lettuce, tomatoes and cheese."
    ]
  },
  {
    title: "Baked Salmon",
    images: ["/21.jpg", "/21.jpg", "/21.jpg"],
    ingredients: [
      { name: "Salmon" },
      { name: "Pine Nuts" },
      { name: "Butter Lettuce" },
      { name: "Yellow Squash" },
      { name: "Olive Oil" },
      { name: "Garlic" }
    ],
    steps: [
      "Preheat the oven to 350°F.",
      "Spread the olive oil around a glass baking dish.",
      "Add the salmon, garlic, and pine nuts to the dish.",
      "Bake for 15 minutes.",
      "Add the yellow squash and put back in the oven for 30 mins.",
      "Remove from oven and let cool for 15 minutes. Add the lettuce and serve."
    ]
  }
];

const Blog = () => {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}> Delicious Recipies</h1>
      {posts.map((post, index) => (
        <Recipe key={index} {...post} />
      ))}
    </div>
  );
};

export default Blog;
