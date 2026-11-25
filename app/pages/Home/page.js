"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiArrowRight, FiArrowUpRight, FiMapPin } from "react-icons/fi";
import styles from "./home.module.css";
import products from "../../data/products";
import shops from "../../data/shops";
import blogPosts from "../../data/blogPosts";
import formatINR from "../../lib/formatINR";

const productTabs = ["New arrivals", "Top rated", "Best sellers"];

const categories = [
  { title: "Dogs & cats", image: "/image/pet-1.png", href: "/pages/Pets/Dogs" },
  { title: "Birds", image: "/image/home-32.png", href: "/pages/Pets/Birds" },
  { title: "Aquarium", image: "/image/home-33.png", href: "/pages/Pets/Aquarium" },
  { title: "Farm friends", image: "/image/home-34.png", href: "/pages/Pets/FarmAnimal" },
];

const journalEntries = blogPosts.slice(0, 3);

export default function Homepage() {
  const [activeTab, setActiveTab] = useState(0);
  const displayedProducts =
    activeTab === 1
      ? [...products].sort((a, b) => b.rating - a.rating)
      : activeTab === 2
        ? [...products].sort((a, b) => b.popularity - a.popularity)
        : products;

  return (
    <main className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>A little more love, every day</span>
          <h1>Good things for <em>good pets.</em></h1>
          <p>
            Thoughtful finds, happy companions, and everything you need to make
            life together even better.
          </p>
          <div className={styles.heroActions}>
            <Link href="/pages/Shop" className={styles.primaryButton}>
              Shop the collection <FiArrowRight aria-hidden="true" />
            </Link>
            <Link href="/pages/Pets" className={styles.textLink}>
              Meet your new best friend <FiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
          <div className={styles.heroNote}>
            <span className={styles.noteMark}>✳</span>
            <span>Made for the ones who make a house a home.</span>
          </div>
        </div>
        <div className={styles.heroArtwork}>
          <div className={styles.heroShape} />
          <img src="/image/home-1.png" alt="A happy pet ready for a new adventure" />
          <div className={styles.heroSticker}>
            <span>Pets first.</span>
            <strong>Always.</strong>
          </div>
          <span className={styles.heroSparkle} aria-hidden="true">✳</span>
        </div>
        <div className={styles.heroIndex} aria-hidden="true">01 / 04</div>
      </section>

      <div className={styles.promiseBar}>
        <span>Thoughtfully picked</span><i />
        <span>For every kind of pet</span><i />
        <span>Here for the happy tails</span>
      </div>

      <section className={styles.section} aria-labelledby="categories-title">
        <div className={styles.sectionHeading}>
          <div>
            <span className={styles.eyebrow}>Find your kind of friend</span>
            <h2 id="categories-title">A whole world of <em>wagging tails.</em></h2>
          </div>
          <Link href="/pages/Pets" className={styles.sectionLink}>
            Explore all pets <FiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
        <div className={styles.categoryGrid}>
          {categories.map((category, index) => (
            <Link
              href={category.href}
              key={category.title}
              className={styles.categoryCard}
            >
              <img src={category.image} alt="" />
              <span className={styles.categoryNumber}>0{index + 1}</span>
              <span className={styles.categoryLabel}>
                {category.title}<FiArrowUpRight aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.productSection}`} aria-labelledby="products-title">
        <div className={styles.sectionHeading}>
          <div>
            <span className={styles.eyebrow}>Little things, big joy</span>
            <h2 id="products-title">The good stuff.</h2>
          </div>
          <Link href="/pages/Products" className={styles.sectionLink}>
            Shop all products <FiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
        <div className={styles.productToolbar}>
          <div className={styles.tabs} role="tablist" aria-label="Featured products">
            {productTabs.map((tab, index) => (
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === index}
                className={activeTab === index ? styles.activeTab : ""}
                onClick={() => setActiveTab(index)}
                key={tab}
              >
                {tab}
              </button>
            ))}
          </div>
          <span className={styles.productCount}>A few favorites to get you started</span>
        </div>
        <div className={styles.productGrid}>
          {displayedProducts.slice(0, 4).map((product) => (
            <Link
              href={`/pages/Products/${product.id}`}
              className={styles.productCard}
              key={product.name}
            >
              <div className={styles.productImage}>
                <img src={product.image} alt={product.name} />
                <span className={styles.productBadge}>{product.badge}</span>
                <span className={styles.productArrow}><FiArrowUpRight aria-hidden="true" /></span>
              </div>
              <div className={styles.productDetails}>
                <h3>{product.name}</h3>
                <span>{formatINR(product.price)}</span>
              </div>
              <p>Made for everyday happy</p>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.promoSection}>
        <div className={styles.promoImage}>
          <img src="/image/home-41.jpg" alt="A playful collection of pet essentials" />
          <span>For the little moments</span>
        </div>
        <div className={styles.promoCopy}>
          <span className={styles.eyebrow}>A treat for your sidekick</span>
          <h2>Everyday joy,<br /><em>on the house.</em></h2>
          <p>Find something special for your favorite four-legged (or feathered) friend.</p>
          <Link href="/pages/Products" className={styles.lightButton}>
            Discover the collection <FiArrowRight aria-hidden="true" />
          </Link>
          <span className={styles.promoDecor} aria-hidden="true">✳</span>
        </div>
      </section>

      <section className={`${styles.section} ${styles.shopsSection}`} aria-labelledby="shops-title">
        <div className={styles.sectionHeading}>
          <div>
            <span className={styles.eyebrow}>Good people, great pet things</span>
            <h2 id="shops-title">Meet your neighborhood <em>pet people.</em></h2>
          </div>
          <Link href="/pages/Shop" className={styles.sectionLink}>
            Find a shop <FiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
        <div className={styles.shopGrid}>
          {shops.slice(0, 3).map((shop) => (
            <Link
              href={`/pages/Shop/SelectShop?shop=${shop.id}`}
              className={styles.shopCard}
              key={shop.id}
            >
              <div className={styles.shopImage}>
                <img src={shop.image} alt="" />
                <span><FiArrowUpRight aria-hidden="true" /></span>
              </div>
              <div className={styles.shopDetails}>
                <h3>{shop.name}</h3>
                <p><FiMapPin aria-hidden="true" /> {shop.location}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.quoteSection}>
        <span className={styles.quoteMark} aria-hidden="true">“</span>
        <p>Because they’re not just pets.<br />They’re <em>your people.</em></p>
        <span className={styles.quoteCaption}>A little reminder from all of us at Treasuremount</span>
      </section>

      <section className={`${styles.section} ${styles.journalSection}`} aria-labelledby="journal-title">
        <div className={styles.sectionHeading}>
          <div>
            <span className={styles.eyebrow}>Notes from the pet-parenthood</span>
            <h2 id="journal-title">A little read, a lot of <em>love.</em></h2>
          </div>
          <Link href="/pages/Blog" className={styles.sectionLink}>
            Visit the journal <FiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
        <div className={styles.journalGrid}>
          {journalEntries.map((entry) => (
            <Link
              href={`/pages/Blog/${entry.slug}`}
              className={styles.journalCard}
              key={entry.slug}
            >
              <div className={styles.journalImage}><img src={entry.image} alt="" /></div>
              <span>{entry.category}</span>
              <h3>{entry.title}</h3>
              <span className={styles.readMore}>Read the story <FiArrowRight aria-hidden="true" /></span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
