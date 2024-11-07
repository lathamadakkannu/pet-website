import React from "react";
import styles from "./Home.module.scss";
import Link from "next/link";

const Home = () => {
  const foodData = [
    {
      id: 1,
      image: "/image/dog.jpg",
      alt: "dog",
      head:"Dog Foods",
      text: "Nourish your furry companions with our premium pet food selection. Whether you have a playful puppy, a mature dog, a kitten, or an adult cat, we offer a variety of recipes crafted to support their specific needs. Choose from options like grain-free, high-protein, or weight-management formulas, each made with quality ingredients that are delicious and nutritious. Give your pets the balanced diet they need to stay active, strong, and healthy.",
    },
    {
      id: 2,
      image: "/image/birds.jpg",
      alt: "birds",
      head:"Birds Foods",
      text: "Treat your feathered friends to a diet that keeps them happy and healthy. Our bird food range is tailored for all types of birds, from parakeets and parrots to wild birds visiting your yard. We offer a mix of seeds, pellets, nuts, and dried fruits that cater to their natural cravings and nutritional needs. Keep their feathers bright and their energy high with blends that are both safe and satisfying.",
    },
    {
      id: 3,
      image: "/image/aquariam.jpg",
      alt: "aquarium",
      head:"Aquarium Foods",
      text: "Provide the perfect diet for your fish with our specialized aquarium food. From colorful tropical fish to hardy goldfish and delicate marine species, we have food that ensures each type of fish gets the proper nutrition. Our range includes flakes, pellets, and freeze-dried options that won’t cloud water and are crafted to enhance color, vitality, and growth. Keep your tank vibrant and your fish thriving with food that’s easy to digest and packed with essential nutrients.",
    },
    {
      id: 4,
      image: "/image/farmsanimals.jpg",
      alt: "farm animals",
      head:"Arm animals Foods",
      text: "Support the well-being and productivity of your farm animals with our high-quality feed. Designed for animals like chickens, goats, cows, and horses, our feeds are rich in vitamins, minerals, and proteins tailored to each species. We focus on providing food that promotes growth, boosts immune health, and supports optimal production—whether it's laying eggs, producing milk, or simply staying strong. With our feed, you can trust that your animals are getting the very best in nutrition.",
    },
  ];

  return (
    <div className={styles.home}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Find Your Perfect Pet Today!</h1>
          <p>
            Browse our collection of adorable and loving pets looking for a
            home.
          </p>
          <Link href='/pages/Dogs' className={styles.ctaButton}>Browse Pets</Link>
        </div>
      </div>

      <div className={styles.homeContainer}>
        <div className={styles.homeContainerHead}>
          <h2>Available Pets</h2>
          <p>choose your perfect pet.</p>
        </div>
        <div className={styles.homeContainerContent}>
          <div className={styles.homeContainerCard}>
            <img src="/image/pets.jpg" alt="Dog" />
            <p>Pets</p>
          </div>
          <div className={styles.homeContainerCard}>
            <img src="/image/birds.jpg" alt="Cat" />
            <p>Birds</p>
          </div>

          <div className={styles.homeContainerCard}>
            <img src="/image/aquariam.jpg" alt="Goat" />
            <p>Aquarium</p>
          </div>
          <div className={styles.homeContainerCard}>
            <img src="/image/farmsanimals.jpg  " alt="Cow" />
            <p>Farm Animals</p>
          </div>
        </div>
        <div className={styles.homeBtn}>
          <Link href='/' className={styles.ctaButton}>All Pets</Link>
        </div>
      </div>
      <div className={styles.homeFood}>
      {foodData.map((item, index) => (
        <div className={styles.homeDogFood} key={item.id}>
          <img src={item.image} alt={item.alt} />
          <div className={styles.homeDogFoodText}>
            <h2>{item.head}</h2>
            <p className={styles.foodContent}>{item.text}</p>
            <Link href='/pages/Products/DogFood' className={styles.seeMoreButton}>See more</Link>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Home;
