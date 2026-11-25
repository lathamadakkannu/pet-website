import React from "react";
import Link from "next/link";
import { FiArrowLeft, FiArrowRight, FiPackage } from "react-icons/fi";
import formatINR from "../../../lib/formatINR";

const orders = [
  {
    id: "TM-2048",
    title: "Playtime Essentials",
    description: "Toys and everyday favorites for playtime.",
    placed: "November 18, 2026",
    status: "Delivered",
    statusClass: "delivered",
    price: 2400,
    image: "/image/tap-2.png",
  },
  {
    id: "TM-2047",
    title: "The Daily Bowl",
    description: "A sturdy bowl for your pet’s daily meals.",
    placed: "November 14, 2026",
    status: "In transit",
    statusClass: "inTransit",
    price: 1800,
    image: "/image/tap-3.png",
  },
];

function OrderHistoryPage() {
  return (
    <main className="orderHistoryPage">
      <Link className="profileBackLink" href="/pages/Profile">
        <FiArrowLeft aria-hidden="true" />
        Back to profile
      </Link>

      <header className="orderHistoryHead">
        <div className="orderHistoryHeadingIcon">
          <FiPackage aria-hidden="true" />
        </div>
        <div>
          <span>Account</span>
          <h1>Your orders</h1>
          <p>Review your recent purchases and delivery progress.</p>
        </div>
        <span className="orderHistoryCount">{orders.length} sample orders</span>
      </header>

      <section className="orderHistoryList" aria-label="Recent orders">
        {orders.map((order) => (
          <article className="orderHistoryCard" key={order.id}>
            <div className="orderHistoryCardHead">
              <div>
                <span className="orderHistoryId">Order {order.id}</span>
                <time>{order.placed}</time>
              </div>
              <span className={`orderHistoryStatus ${order.statusClass}`}>
                {order.status}
              </span>
            </div>

            <div className="orderHistoryProduct">
              <img src={order.image} alt={order.title} />
              <div>
                <h2>{order.title}</h2>
                <p>{order.description}</p>
                <strong>{formatINR(order.price)}</strong>
              </div>
            </div>

            <div className="orderHistoryActions">
              <Link href="/pages/Profile/OrderHistory/TrackOrder">
                Track order <FiArrowRight aria-hidden="true" />
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default OrderHistoryPage;
