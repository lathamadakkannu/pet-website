import Link from "next/link";
import { notFound } from "next/navigation";
import { AiFillStar } from "react-icons/ai";
import BackButton from "../../../components/BackButton";
import products from "../../../data/products";
import formatINR from "../../../lib/formatINR";
import styles from "./ProductDetails.module.css";

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export default async function ProductDetailsPage({ params }) {
  const { id } = await params;
  const product = products.find((item) => item.id === id);

  if (!product) {
    notFound();
  }

  return (
    <main className={styles.productDetails}>
      <BackButton fallbackHref="/pages/Products" label="Back to products" />
      <section className={styles.productLayout} aria-labelledby="product-title">
        <div className={styles.productImage}>
          <img src={product.image} alt={product.name} />
          <span>{product.badge}</span>
        </div>
        <div className={styles.productInfo}>
          <span className={styles.category}>{product.category}</span>
          <h1 id="product-title">{product.name}</h1>
          <div
            className={styles.rating}
            aria-label={`Rated ${product.rating.toFixed(1)} out of 5`}
          >
            {Array.from({ length: Math.round(product.rating) }, (_, index) => (
              <AiFillStar aria-hidden="true" key={index} />
            ))}
            <span>{product.rating.toFixed(1)} / 5</span>
          </div>
          <p className={styles.description}>{product.description}</p>
          <p className={styles.price}>{formatINR(product.price)}</p>
          <div className={styles.productNote}>
            <h2>Product details</h2>
            <dl>
              <div>
                <dt>Category</dt>
                <dd>{product.category}</dd>
              </div>
              <div>
                <dt>Product label</dt>
                <dd>{product.badge}</dd>
              </div>
            </dl>
          </div>
          <p className={styles.availability}>
            Ask your local pet shop to confirm current availability.
          </p>
          <Link className={styles.shopLink} href="/pages/Shop">
            Find a neighborhood shop <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
