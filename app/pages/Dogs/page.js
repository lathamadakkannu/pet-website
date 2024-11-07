import React from "react";
import styles from "./Dogs.module.scss";

const Dogs = () => {
  const animalsData = [
    {
      id: 1,
      name: "Max",
      breed: "Golden Retriever",
      description:
        "Welcome to Happy Tails Market, your trusted source for finding the perfect dog companion.",
      image: "/image/GoldenRetriever.jpeg",
    },
    {
      id: 2,
      name: "Bella",
      breed: "Bulldog",
      description:
        "Welcome to Happy Tails Market, your trusted source for finding the perfect dog companion.",
      image: "/image/Bulldog.jpg",
    },
    {
      id: 3,
      name: "Charlie",
      breed: "Poodle",
      description:
        "Welcome to Happy Tails Market, your trusted source for finding the perfect dog companion.",
      image: "/image/Poodle.jpg",
    },
    {
      id: 4,
      name: "Luna",
      breed: "Beagle",
      description:
        "Welcome to Happy Tails Market, your trusted source for finding the perfect dog companion.",
      image: "/image/Beagle.webp",
    },
  ];

  return (
    <div className={styles.animals}>
      <div className={styles.animalsContainer}>
        <div className={styles.animalsHero}>
          <div className={styles.animalsImage}>
            <img src="/image/dog.jpg" alt="Dog" />
          </div>

          {/* Text Content Section */}
          <div className={styles.animalsContent}>
            <div className={styles.animalsHead}>
              <h2>Dog For Sale</h2>
            </div>
            <div className={styles.shortDescription}>
              <p>
                Welcome to Happy Tails Market, your trusted source for finding
                the perfect dog companion. We specialize in connecting you with
                reputable breeders and adoption centers to ensure a happy and
                healthy pet. Whether you’re looking for a playful puppy or a
                loyal adult dog, we offer a variety of breeds and sizes to fit
                every lifestyle. Our commitment to animal welfare and
                responsible pet ownership means you can find a friend for life
                with confidence. Begin your journey to finding your new furry
                family member today!
              </p>
            </div>
          </div>
        </div>
        <div className={styles.animalContent}>
          {animalsData.map((animal) => (
            <div key={animal.id} className={styles.animalsCard}>
              <img src={animal.image} alt={animal.breed} />
              <div className={styles.animalsCardText}>
                <h2>{animal.name}</h2>
                <p>{animal.breed}</p>
                <p>{animal.description}</p>
              </div>
              <div className={styles.animalsCardBtn}>
                <button>View details</button>
                <button>Address</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dogs;
