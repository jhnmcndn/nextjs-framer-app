'use client';

import { useState, useEffect } from "react";
import Button from "@/components/Button";
import Image from "next/image";
import styles from "./styles.module.scss";

const heroData = [
  {
    id: 1,
    src: "/assets/home/company1.png",
    alt: "Company Logo",
    width: 49,
    height: 48
  },
  {
    id: 2,
    src: "/assets/home/bogo.png",
    alt: "Bogo Logo",
    width: 119,
    height: 30
  },
  {
    id: 3,
    src: "/assets/home/company3.png",
    alt: "Company Logo",
    width: 73,
    height: 49
  },
  {
    id: 4,
    src: "/assets/home/logoipsum.png",
    alt: "Logoipsum Logo",
    width: 132,
    height: 40
  },
  {
    id: 5,
    src: "/assets/home/company5.png",
    alt: "Company Logo",
    width: 42,
    height: 38
  },
]

const HomePage = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    if (typeof window !== 'undefined') {
      setScreenWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  let filteredHeroData = [...heroData];

  if (screenWidth < 880) {
    filteredHeroData = filteredHeroData.filter(item => item.src !== '/assets/home/bogo.png');
  }

  if (screenWidth < 1200) {
    filteredHeroData = filteredHeroData.filter(item => item.src !== '/assets/home/logoipsum.png');
  }


  return (
    <main className={styles.homePageContainer}>
      <div className={styles.homeWrapper}>
        <div className={styles.heroTextWrapper}>
          <h1>
            Analytics for
            <span>developers</span>
          </h1>
          <p>Easy to install. Unlimited power.</p>
          <div className={styles.buttons}>
            <Button
              className={`${styles.btn} ${styles.getStarted}`}
              onClick={() => console.log('Clicked: Get Started')}
            >
              Get Started
            </Button>
            <Button
              className={`${styles.btn} ${styles.bookDemo}`}
              onClick={() => console.log('Clicked: Book Demo')}
            >
              Book Demo
            </Button>
          </div>
        </div>
        <div className={styles.trustedCompanies}>
          <span className={styles.trustByText}>Trusted By</span>
          <div className={styles.logoWrappers}>
            {filteredHeroData.map(item => (
              <Image
                key={item.id}
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className={styles.companyLogo}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;