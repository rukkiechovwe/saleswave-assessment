"use client";
import Icons from "@/app/_assets/icons";
import { useEffect, useState } from "react";

export default function useStars(stars) {
  const [starIcons, setstarIcons] = useState([]);
  useEffect(() => {
    starArray(stars);
  }, [stars]);

  const starArray = (stars) => {
    const array = [];

    // Render orange stars based on stars count
    for (let i = 0; i < stars; i++) {
      array.push(Icons.ic_star_fill);
    }

    // Render grey stars for the remaining count
    for (let i = stars; i < 5; i++) {
      array.push(Icons.ic_star_empty);
    }
    setstarIcons(array);
  };

  return { starIcons };
}
