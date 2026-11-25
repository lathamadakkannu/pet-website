"use client";

import React, { useEffect, useRef, useState } from "react";
import DogsShop from "./Dogs/page";
import Birdspage from "./Birds/page";
import Aquariumpage from "./Aquarium/page";
import FarmAnimal from "./FarmAnimal/page";

const categories = [
  { id: "dogs", title: "Dogs & Cats", image: "/image/pet-1.png" },
  { id: "birds", title: "Birds", image: "/image/home-32.png" },
  { id: "aquarium", title: "Aquarium", image: "/image/home-33.png" },
  { id: "farm", title: "Farm Animals", image: "/image/home-34.png" },
];

const categoryPages = {
  dogs: DogsShop,
  birds: Birdspage,
  aquarium: Aquariumpage,
  farm: FarmAnimal,
};

function PetsPage() {
  const [activeCategory, setActiveCategory] = useState("dogs");
  const catalogRef = useRef(null);
  const ActiveCategoryPage = categoryPages[activeCategory];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const selectCategory = (categoryId) => {
    setActiveCategory(categoryId);
    window.requestAnimationFrame(() => {
      catalogRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  return (
    <div className="petspage">
      <section className="petspageHeroSection">
        <div className="petspageContent">
          <span className="petEyebrow">Good things start with a friend</span>
          <h1 className="title">Meet your new favorite companion</h1>
          <p className="petIntro">
            Browse pets by category and find the one that feels right for your
            home.
          </p>
          <div className="categories" aria-label="Pet categories">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                className={`categoryContent ${
                  activeCategory === category.id ? "isActive" : ""
                }`}
                aria-pressed={activeCategory === category.id}
                onClick={() => selectCategory(category.id)}
              >
                <span className="category">
                  <img src={category.image} alt="" />
                </span>
                <span className="categoriesTitle">{category.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
      <div ref={catalogRef} style={{ scrollMarginTop: "110px" }}>
        <ActiveCategoryPage showBackButton={false} />
      </div>
    </div>
  );
}

export default PetsPage;
