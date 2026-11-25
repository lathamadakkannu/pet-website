"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { FiMapPin, FiSearch, FiSliders, FiX } from "react-icons/fi";
import shops from "../../data/shops";

const shopCategories = ["General pet supplies", "Birds & aquarium"];
const locations = [...new Set(shops.map((shop) => shop.location.split(",")[0]))].sort();

function ShopPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  const visibleShops = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const filteredShops = shops.filter((shop) => {
      const matchesQuery =
        !normalizedQuery ||
        `${shop.name} ${shop.location} ${shop.description} ${shop.category}`
          .toLowerCase()
          .includes(normalizedQuery);
      const matchesCategory = !category || shop.category === category;
      const city = shop.location.split(",")[0];
      const matchesLocation =
        selectedLocations.length === 0 || selectedLocations.includes(city);

      return matchesQuery && matchesCategory && matchesLocation;
    });

    return filteredShops.sort((first, second) =>
      first.name.localeCompare(second.name),
    );
  }, [category, query, selectedLocations]);

  const toggleLocation = (location) => {
    setSelectedLocations((currentLocations) =>
      currentLocations.includes(location)
        ? currentLocations.filter((item) => item !== location)
        : [...currentLocations, location],
    );
  };

  const clearFilters = () => {
    setQuery("");
    setCategory("");
    setSelectedLocations([]);
  };

  return (
    <main className="shop-directory">
      <header className="shop-directory__intro">
        <p className="shop-directory__eyebrow">Good things, close to home</p>
        <h1>Find your neighborhood pet shop</h1>
        <p>
          Meet the independent shops bringing a little more joy to pets and
          their people.
        </p>
      </header>

      <div className="shop-directory__toolbar">
        <label className="shop-directory__search">
          <FiSearch aria-hidden="true" />
          <span className="visuallyHidden">Search shops</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by shop or location"
          />
        </label>
        <button
          className="shop-directory__filter-toggle"
          type="button"
          aria-expanded={showFilters}
          aria-controls="shop-directory-filters"
          onClick={() => setShowFilters((isOpen) => !isOpen)}
        >
          {showFilters ? <FiX aria-hidden="true" /> : <FiSliders aria-hidden="true" />}
          {showFilters ? "Hide filters" : "Filters"}
        </button>
      </div>

      <div className="shop-directory__layout">
        <aside
          className={`shop-directory__filters${showFilters ? " isOpen" : ""}`}
          id="shop-directory-filters"
          aria-label="Filter shops"
        >
          <div className="shop-directory__filter-heading">
            <h2>Filter shops</h2>
            <button type="button" onClick={clearFilters}>Clear all</button>
          </div>

          <fieldset>
            <legend>Shop type</legend>
            <label>
              <input
                type="radio"
                name="shop-category"
                checked={!category}
                onChange={() => setCategory("")}
              />
              <span>All shops</span>
              <small>{shops.length}</small>
            </label>
            {shopCategories.map((shopCategory) => (
              <label key={shopCategory}>
                <input
                  type="radio"
                  name="shop-category"
                  checked={category === shopCategory}
                  onChange={() => setCategory(shopCategory)}
                />
                <span>{shopCategory}</span>
                <small>
                  {shops.filter((shop) => shop.category === shopCategory).length}
                </small>
              </label>
            ))}
          </fieldset>

          <fieldset>
            <legend>Location</legend>
            {locations.map((location) => (
              <label key={location}>
                <input
                  type="checkbox"
                  checked={selectedLocations.includes(location)}
                  onChange={() => toggleLocation(location)}
                />
                <span>{location}</span>
                <small>
                  {shops.filter((shop) => shop.location.startsWith(location)).length}
                </small>
              </label>
            ))}
          </fieldset>
        </aside>

        <section className="shop-directory__results" aria-label="Pet shops">
          <div className="shop-directory__results-heading">
            <p>
              <strong>{visibleShops.length}</strong>{" "}
              {visibleShops.length === 1 ? "shop" : "shops"} to explore
            </p>
          </div>
          <div className="shop-directory__grid">
            {visibleShops.map((shop) => (
              <Link
                className="shop-directory__card"
                href={`/pages/Shop/SelectShop?shop=${shop.id}`}
                key={shop.id}
              >
                <img src={shop.image} alt="" />
                <div className="shop-directory__details">
                  <span className="shop-directory__location">
                    <FiMapPin aria-hidden="true" /> {shop.location}
                  </span>
                  <h2>{shop.name}</h2>
                  <p>{shop.description}</p>
                  <span className="shop-directory__category">{shop.category}</span>
                  <span className="shop-directory__link">
                    Explore shop <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            ))}
            {visibleShops.length === 0 && (
              <p className="shop-directory__empty" role="status">
                No shops match these filters. Try changing your search or clearing
                a filter.
              </p>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

export default ShopPage;
