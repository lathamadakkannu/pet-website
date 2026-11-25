import React from "react";
import PetCategoryListing from "../PetCategoryListing";

function BirdsPage({ showBackButton = true }) {
  return <PetCategoryListing category="birds" showBackButton={showBackButton} />;
}

export default BirdsPage;
