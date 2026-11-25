"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  FiArrowLeft,
  FiArrowRight,
  FiHelpCircle,
  FiLogOut,
  FiPackage,
  FiUser,
} from "react-icons/fi";
import backButtonStyles from "../../components/BackButton.module.css";
import { getDemoUserName, signOutDemoUser } from "../../lib/demoSession";

function ProfilePage() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const savedName = getDemoUserName();
    if (!savedName) {
      window.location.replace("/components/Login");
      return;
    }

    setUserName(savedName);
  }, []);

  const handleSignOut = () => {
    signOutDemoUser();
    window.location.replace("/components/Login");
  };

  const firstName = userName.trim().split(/\s+/)[0] || "there";

  if (!userName) {
    return null;
  }

  return (
    <main className="profileDashboard">
      <Link href="/" className={backButtonStyles.backButton}>
        <FiArrowLeft aria-hidden="true" />
        Back to home
      </Link>
      <header className="profileDashboardHead">
        <div>
          <span className="profileEyebrow">Your account</span>
          <h1>Good to see you, {firstName}</h1>
          <p>Manage your orders and get help with your pet essentials.</p>
        </div>
        <button
          className="profileSignOut"
          type="button"
          onClick={handleSignOut}
        >
          <FiLogOut aria-hidden="true" />
          Sign out
        </button>
      </header>

      <section className="profileSummary" aria-label="Account overview">
        <span className="profileSummaryAvatar" aria-hidden="true">
          <FiUser />
        </span>
        <div>
          <h2>{userName}</h2>
          <p>Pet parent</p>
        </div>
        <span className="profileSummaryBadge">Welcome back</span>
      </section>

      <section className="profileShortcuts" aria-labelledby="profile-shortcuts-title">
        <div className="profileSectionHeading">
          <div>
            <h2 id="profile-shortcuts-title">Your shortcuts</h2>
            <p>The things you may need most.</p>
          </div>
        </div>

        <div className="profileShortcutGrid">
          <Link className="profileShortcut" href="/pages/Profile/OrderHistory">
            <span className="profileShortcutIcon">
              <FiPackage aria-hidden="true" />
            </span>
            <span>
              <strong>Order history</strong>
              <small>View and track your orders</small>
            </span>
            <FiArrowRight className="profileShortcutArrow" aria-hidden="true" />
          </Link>
          <Link className="profileShortcut" href="/pages/Profile/Help">
            <span className="profileShortcutIcon">
              <FiHelpCircle aria-hidden="true" />
            </span>
            <span>
              <strong>Help &amp; support</strong>
              <small>Find answers to common questions</small>
            </span>
            <FiArrowRight className="profileShortcutArrow" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="profileBrowseCard">
        <div>
          <span>For you and your companion</span>
          <h2>Need to restock or find a new favorite?</h2>
          <p>Browse pets, everyday essentials, and local shops.</p>
        </div>
        <Link href="/pages/Shop">
          Explore the shop <FiArrowRight aria-hidden="true" />
        </Link>
      </section>
    </main>
  );
}

export default ProfilePage;
