"use client";

import { useLayoutEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { MdStarRate } from "react-icons/md";
import formatINR from "../../lib/formatINR";
import { allPets } from "../../data/pets";
import styles from "./PetDetails.module.css";
import BackButton from "../../components/BackButton";

const petsById = Object.fromEntries(allPets.map((pet) => [pet.id, pet]));

const PetDetails = () => {
  const [pet, setPet] = useState(null);

  useLayoutEffect(() => {
    const petId = new URLSearchParams(window.location.search).get("pet");
    setPet(petsById[petId] || petsById.milo);
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  if (!pet) {
    return (
      <div className={`petDetails ${styles.petDetails}`}>
        <div className="petDetailsContainer">
          <BackButton fallbackHref="/pages/Pets" label="Back to pets" />
          <p role="status">Loading pet details...</p>
        </div>
      </div>
    );
  }

  const reviews = [
    {
      id: 1,
      userName: "Elisa Joe",
      date: "Nov 9, 2023",
      dateTime: "2023-11-09",
      rating: Math.round(pet.rating),
      content: `${pet.name} sounds like a lovely ${pet.breed}. The profile helped me understand what to prepare before welcoming a new companion.`,
    },
    {
      id: 2,
      userName: "John Doe",
      date: "Oct 15, 2023",
      dateTime: "2023-10-15",
      rating: Math.max(3, Math.round(pet.rating) - 1),
      content: `I appreciated learning about ${pet.name}'s routine and the care this ${pet.type.toLowerCase()} needs.`,
    },
    {
      id: 3,
      userName: "Hanna",
      date: "Oct 15, 2023",
      dateTime: "2023-10-15",
      rating: Math.round(pet.rating),
      content: `The information about ${pet.name} made it easier to think through a comfortable home and daily routine.`,
    },
  ];

  return (
    <div className={`petDetails ${styles.petDetails}`}>
      <div className="petDetailsContainer">
        <BackButton fallbackHref="/pages/Pets" label="Back to pets" />
        <div className="petDetailsContent">
          <div className="detailsSection">
            <div className="detailsSectionContent">
              <div
                className={`detailsImgSection2${pet.imageFit === "contain" ? " detailsImgSection2--contain" : ""}`}
              >
                <img src={pet.image} alt={pet.name} />
              </div>
            </div>
            <div className="addCard">
              <div className="description">
                <div className="descriptionHead">
                  <h2>Description</h2>
                </div>
                <div className="descriptionContent">
                  <p>{pet.description}</p>
                  <div className="petFeatureList">
                    <ul>
                      <li>Age: {pet.age}</li>
                      <li>Color: {pet.color}</li>
                      <li>Category: {pet.type}</li>
                      <li>Contact us to ask about availability and care.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="detailsSection1">
            <div className="detailsSectionHead">
              <div className="detailsHead">
                <h2>{pet.name}</h2>
                <div className="rating">
                  <span>{pet.rating.toFixed(1)}</span>{" "}
                  {Array.from({ length: Math.round(pet.rating) }, (_, index) => (
                    <AiFillStar key={index} />
                  ))}{" "}
                  <span>{pet.reviewCount} Reviews</span>
                </div>
              </div>
            </div>

            <div className="detailsSectionContent">
              <h2>{formatINR(pet.price)}</h2>
              <p>{formatINR(pet.originalPrice)}</p>
            </div>

            <hr />
            <div className="petContent">
              <p>{pet.summary}</p>
            </div>
            <div className="petContent">
              <h2>Age: {pet.age}</h2>
              <h2>Color: {pet.color}</h2>
            </div>

            <div className="petFeature">
              <div className="petFeatureHead">
                <h2>Outstanding Features</h2>
              </div>
              <div className="petFeatureContent">
                <p>{pet.featureIntro}</p>
              </div>
              <div className="petFeatureList">
                <ul>
                  {pet.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="petFeature">
              <div className="petFeatureHead">
                <h2>About {pet.name}</h2>
              </div>
              <div className="petFeatureContent">
                <p>{pet.about}</p>
              </div>
              <div className="petFeatureList">
                <ul>
                  {pet.carePoints.map((carePoint) => (
                    <li key={carePoint}>{carePoint}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <section className="reviewContainer" aria-labelledby="pet-reviews-heading">
          <div className="reviewHeading">
            <div>
              <span className="reviewEyebrow">From pet parents</span>
              <h3 id="pet-reviews-heading">Reviews</h3>
            </div>
            <span className="reviewAverage">
              {pet.rating.toFixed(1)} average · {pet.reviewCount} reviews
            </span>
          </div>
          {reviews.map((review) => (
            <article className="reviewCard" key={review.id}>
              <div className="reviewCardHeading">
                <div className="reviewAuthor">
                  <span className="reviewAvatar" aria-hidden="true">
                    {review.userName.charAt(0).toUpperCase()}
                  </span>
                  <div>
                    <h4>{review.userName}</h4>
                    <time dateTime={review.dateTime}>{review.date}</time>
                  </div>
                </div>
                <div className="reviewStars" aria-label={`${review.rating} out of 5 stars`}>
                  {Array.from({ length: review.rating }, (_, index) => (
                    <MdStarRate aria-hidden="true" key={index} />
                  ))}
                </div>
              </div>
              <p className="reviewData">{review.content}</p>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
};

export default PetDetails;
