"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import products from "../../data/products";
import formatINR from "../../lib/formatINR";

const productTabs = ["New arrivals", "Top rated", "Best sellers"];

function Products() {
  const [activeTab, setActiveTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const visibleProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    const matches = products.filter((product) =>
      `${product.name} ${product.category} ${product.description}`
        .toLowerCase()
        .includes(query),
    );

    if (activeTab === 1) {
      return [...matches].sort((a, b) => b.rating - a.rating);
    }

    if (activeTab === 2) {
      return [...matches].sort((a, b) => b.popularity - a.popularity);
    }

    return matches;
  }, [activeTab, searchQuery]);

  return (
    <main className="product-catalog">
      <header className="product-catalog__intro">
        <span className="product-catalog__eyebrow">Thoughtful picks for every companion</span>
        <h1>Everyday pet essentials</h1>
        <p>Explore food, toys, and little comforts for your pet’s daily routine.</p>
        <label className="product-catalog__search">
          <FiSearch aria-hidden="true" />
          <span className="visuallyHidden">Search products</span>
          <input
            type="search"
            placeholder="Search products, categories..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
        </label>
      </header>

      <section className="product-catalog__section" aria-label="Pet products">
        <div className="product-catalog__toolbar">
          <p>{visibleProducts.length} carefully chosen favorites</p>
          <div className="product-catalog__tabs" role="tablist" aria-label="Sort products">
            {productTabs.map((tab, index) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={activeTab === index}
                className={activeTab === index ? "isActive" : ""}
                onClick={() => setActiveTab(index)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {visibleProducts.length ? (
          <div className="product-catalog__grid">
            {visibleProducts.map((product) => (
              <Link
                href={`/pages/Products/${product.id}`}
                className="product-catalog__card"
                key={product.id}
              >
                <div className="product-catalog__image">
                  <img
                    src={product.image}
                    alt={product.name}
                    className={
                      product.id === "tug-and-fetch-toy"
                        ? "product-catalog__image--contain"
                        : undefined
                    }
                  />
                  <span>{product.badge}</span>
                </div>
                <div className="product-catalog__info">
                  <span className="product-catalog__category">{product.category}</span>
                  <h2>{product.name}</h2>
                  <p>{product.description}</p>
                  <strong>{formatINR(product.price)}</strong>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="product-catalog__empty" role="status">
            No products match “{searchQuery}”. Try another search.
          </p>
        )}
      </section>

      <section className="product-catalog__collections" aria-label="Explore neighborhood shops">
        <div>
          <span className="product-catalog__eyebrow">Shopping local feels good</span>
          <h2>Find the right little something, close to home.</h2>
          <p>Browse independent pet shops and discover thoughtful finds in your neighborhood.</p>
        </div>
        <Link href="/pages/Shop">Explore neighborhood shops <span aria-hidden="true">→</span></Link>
      </section>
    </main>
  );
}

export default Products;
