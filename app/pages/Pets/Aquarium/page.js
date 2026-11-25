import React from "react";
import PetCategoryListing from "../PetCategoryListing";

function AquariumPage({ showBackButton = true }) {
  return <PetCategoryListing category="aquarium" showBackButton={showBackButton} />;
}

export default AquariumPage;
