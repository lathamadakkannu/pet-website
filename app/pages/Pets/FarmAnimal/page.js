import React from "react";
import PetCategoryListing from "../PetCategoryListing";

function FarmAnimalPage({ showBackButton = true }) {
  return <PetCategoryListing category="farm" showBackButton={showBackButton} />;
}

export default FarmAnimalPage;
