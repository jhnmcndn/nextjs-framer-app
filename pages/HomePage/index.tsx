'use client';

import { useState, useEffect } from "react";
import Button from "@/components/Button";
import Dashboard from "@/pages/HomePage/components/Dashboard";
import Collaboration from "@/pages/HomePage/components/Collaboration";
import Graphs from "@/pages/HomePage/components/Graphs";
import RealTime from "@/pages/HomePage/components/RealTime";
import Reports from "@/pages/HomePage/components/Reports";
import { heroDataLogo, chartsData } from "@/pages/HomePage/data";
import { dm_mono } from "@/app/fonts";
import Image from "next/image";
import clsx from "clsx";
import styles from "./styles.module.scss";

const HomePage = () => {
  const [screenWidth, setScreenWidth] = useState(1400);
  const [activeTabId, setActiveTabId] = useState<string>('dashboard');
  console.log('~~caff activeTabId: ', activeTabId);

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

  let filteredHeroData = [...heroDataLogo];

  if (screenWidth < 880) {
    filteredHeroData = filteredHeroData.filter(item => item.src !== '/assets/home/bogo.png');
  }

  if (screenWidth < 1200) {
    filteredHeroData = filteredHeroData.filter(item => item.src !== '/assets/home/logoipsum.png');
  }

  const handleTabClick = (id: string) => {
    setActiveTabId(id)
  }

  const renderComponent = () => {
    switch (activeTabId) {
      case 'dashboard':
        return <Dashboard/>;
      case 'graphs':
        return <Graphs/>;
      case 'reports':
        return <Reports/>;
      case 'realTime':
        return <RealTime/>;
      case 'collaboration':
        return <Collaboration/>;
      default:
        return <Dashboard/>;
    }
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
        <div className={styles.chartsContainer}>
          {renderComponent()}
          <ul className={`${styles.listWrap} ${dm_mono.className}`}>
            {chartsData.map(item => (
              <li
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={clsx({
                  [styles.active]: activeTabId === item.id,
                })}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default HomePage;