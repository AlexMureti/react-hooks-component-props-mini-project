
import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  // minutes-to-read emoji logic
  let emoji = "";
  if (minutes !== undefined) {
    if (minutes < 30) {
      const cups = Math.ceil(minutes / 5);
      emoji = "☕️".repeat(cups) + ` ${minutes} min read`;
    } else {
      const boxes = Math.ceil(minutes / 10);
      emoji = "🍱".repeat(boxes) + ` ${minutes} min read`;
    }
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      {minutes !== undefined && <p>{emoji}</p>}
    </article>
  );
}

export default Article;
