"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FiArrowLeft, FiMapPin } from "react-icons/fi";
import shops from "../../../data/shops";

function SelectShop() {
  const [shopId, setShopId] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setShopId(params.get("shop") || shops[0].id);
  }, []);

  const shop = shopId
    ? shops.find((item) => item.id === shopId) || shops[0]
    : null;

  if (!shop) {
    return (
      <main className="selected-shop selected-shop__loading" role="status">
        Loading shop details…
      </main>
    );
  }

  return (
    <main className="selected-shop">
      <Link href="/pages/Shop" className="selected-shop__back">
        <FiArrowLeft aria-hidden="true" /> All neighborhood shops
      </Link>

      <header className="selected-shop__hero">
        <img src={shop.image} alt="" />
        <div className="selected-shop__hero-copy">
          <span className="selected-shop__eyebrow">Your neighborhood pet shop</span>
          <h1>{shop.name}</h1>
          <p><FiMapPin aria-hidden="true" /> {shop.location}</p>
          <p>{shop.description}</p>
        </div>
      </header>
      {shop.details && (
        <section
          className="selected-shop__details"
          aria-labelledby="selected-shop-details-title"
        >
          <div className="selected-shop__details-copy">
            <span className="selected-shop__eyebrow">A little more about the shop</span>
            <h2 id="selected-shop-details-title">{shop.name}</h2>
            <p>{shop.details}</p>
          </div>
          {shop.highlights && (
            <div className="selected-shop__highlights">
              <h3>What you can explore</h3>
              <ul>
                {shop.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          )}
        </section>
      )}
    </main>
  );
}

export default SelectShop;
