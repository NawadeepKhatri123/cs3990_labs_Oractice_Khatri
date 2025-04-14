
import React from "react";

export const Recipe = ({ title, images, content, ingredients, steps }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "16px",
        marginBottom: "24px",
        borderRadius: "8px"
      }}
    >
      <h2>{title}</h2>

      <div
        style={{
          display: "flex",
          gap: "12px",
          overflowX: "auto",
          marginBottom: "12px"
        }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt=""
            style={{
              width:
                title === "Baked Salmon" && index === 0
                  ? "310px"
                  : "150px",
              height: "150px",
              objectFit: "cover",
              borderRadius: "4px",
              border: "1px solid white",
              marginRight: index !== images.length - 1 ? "12px" : "0"
            }}
          />
        ))}
      </div>

      <p>{content}</p>

      <h3>Ingredients:</h3>
      <ul>
        {ingredients.map((item, index) => (
          <li key={index}>
            {item.amount ? `${item.amount} ${item.measurement || ""} ` : ""}
            {item.name}
          </li>
        ))}
      </ul>

      <h3>Steps:</h3>
      <ol>
        {steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

