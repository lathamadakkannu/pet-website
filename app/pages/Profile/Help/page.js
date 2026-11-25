import React from "react";
import Link from "next/link";
import { FiArrowLeft, FiMail, FiPackage } from "react-icons/fi";

function HelpPage() {
  return (
    <main className="help-page">
      <div className="help-page-container">
        <Link className="profileBackLink" href="/pages/Profile">
          <FiArrowLeft aria-hidden="true" />
          Back to profile
        </Link>

        <header className="helpPageHead">
          <span>We’re here to help</span>
          <h1 className="help-page__title">Help &amp; support</h1>
          <p>Find a quick answer or get in touch with our support team.</p>
        </header>

        <section className="help-page__section">
          <h2>
            <FiPackage aria-hidden="true" />
            Orders and delivery
          </h2>
          <p>
            Visit your order history to review a purchase or open its tracking
            details. If you need help with an order, include its order number
            when contacting support.
          </p>
          <Link className="helpActionLink" href="/pages/Profile/OrderHistory">
            Go to order history
          </Link>
        </section>

        <section className="help-page__section">
          <h2>Returns and product questions</h2>
          <p>
            For return eligibility, product details, or an order issue, contact
            our team with a short description of what you need and the related
            order number, if you have one.
          </p>
        </section>

        <section className="help-page__section">
          <h2>Account access</h2>
          <p>
            This website is a frontend preview. Sign-in and account information
            are not connected to a live account service.
          </p>
        </section>

        <section className="helpContactCard" aria-labelledby="help-contact-title">
          <div className="helpContactIcon">
            <FiMail aria-hidden="true" />
          </div>
          <div>
            <h2 id="help-contact-title">Still need a hand?</h2>
            <p>Send your question to our customer support team.</p>
          </div>
         
        </section>
      </div>
    </main>
  );
}

export default HelpPage;
