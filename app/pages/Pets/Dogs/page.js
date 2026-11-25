import React from "react";
import PetCategoryListing from "../PetCategoryListing";

function DogsPage({ showBackButton = true }) {
  return <PetCategoryListing category="dogs" showBackButton={showBackButton} />;
}

export default DogsPage;
