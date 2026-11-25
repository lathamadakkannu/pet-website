"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { FiMapPin, FiSearch } from "react-icons/fi";
import BackButton from "../../components/BackButton";
import petCategories from "../../data/pets";
import formatINR from "../../lib/formatINR";

const sortOptions = [
  { id: "new", label: "New arrivals" },
  { id: "popular", label: "Most loved" },
  { id: "price", label: "Price: low to high" },
];

function PetCategoryListing({ category, showBackButton = true }) {
  const [sortBy, setSortBy] = useState("new");
  const [searchQuery, setSearchQuery] = useState("");
  const currentCategory = petCategories[category];

  const visiblePets = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    const filteredPets = currentCategory.pets.filter((pet) =>
      `${pet.name} ${pet.breed} ${pet.age}`.toLowerCase().includes(query)
    );

    if (sortBy === "popular") {
      return [...filteredPets].sort((a, b) => b.popularity - a.popularity);
    }

    if (sortBy === "price") {
      return [...filteredPets].sort((a, b) => a.price - b.price);
    }

    return filteredPets;
  }, [currentCategory, searchQuery, sortBy]);

  return (
    <>
      {showBackButton && (
        <div style={{ width: "min(1180px, calc(100% - 48px))", margin: "24px auto 0" }}>
          <BackButton fallbackHref="/pages/Pets" label="Back to pets" />
        </div>
      )}
      <section
        className={`petCatalog ${showBackButton ? "petCatalog--withBackButton" : ""}`}
        aria-labelledby="pet-catalog-title"
      >
      <header className="petCatalogHead">
        <div>
          <span>Meet your next best friend</span>
          <h2 id="pet-catalog-title">{currentCategory.title}</h2>
          <p>{currentCategory.description}</p>
        </div>
        <span className="petCatalogCount">
          {visiblePets.length} {visiblePets.length === 1 ? "companion" : "companions"}
        </span>
      </header>

      <div className="petCatalogToolbar">
        <div className="petCatalogSort" role="tablist" aria-label="Sort companions">
          {sortOptions.map((option) => (
            <button
              key={option.id}
              type="button"
              role="tab"
              aria-selected={sortBy === option.id}
              className={sortBy === option.id ? "isActive" : ""}
              onClick={() => setSortBy(option.id)}
            >
              {option.label}
            </button>
          ))}
        </div>

        <label className="petCatalogSearch">
          <FiSearch aria-hidden="true" />
          <span className="visuallyHidden">Search companions</span>
          <input
            type="search"
            value={searchQuery}
            placeholder="Search by name or breed"
            onChange={(event) => setSearchQuery(event.target.value)}
          />
        </label>
      </div>

      {visiblePets.length ? (
        <div className="petCatalogGrid">
          {visiblePets.map((pet) => (
            <Link
              className="petCatalogCard"
              href={`/pages/PetDetails?pet=${pet.id}`}
              key={pet.id}
            >
              <div className="petCatalogImage">
                <img
                  src={pet.image}
                  alt={pet.name}
                  className={pet.imageFit === "contain" ? "petCatalogImage--contain" : ""}
                />
                <span>Meet {pet.name}</span>
              </div>
              <div className="petCatalogInfo">
                <div className="petCatalogName">
                  <h3>{pet.name}</h3>
                  <span>{formatINR(pet.price)}</span>
                </div>
                <p>{pet.breed}</p>
                <div className="petCatalogMeta">
                  <span>{pet.age}</span>
                  <span><FiMapPin aria-hidden="true" /> Tenkasi</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="petCatalogEmpty">
          No companions match “{searchQuery}”. Try another name or breed.
        </p>
      )}
      </section>
    </>
  );
}

export default PetCategoryListing;
