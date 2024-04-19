"use client"

import { footerList, socialsList } from "@/components/Footer/data";
import Image from "next/image";
import { useState } from "react";
import styles from "./styles.module.scss";

const Footer = () => {
  const [isHover, setIsHover] = useState<any>(null);

  const handleHover = (e: any) => {
    setIsHover(e);
  }

  const handleMouseOut = () => {
    setIsHover(null);
  }

  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerWrapper}>
        <div className={styles.upperContent}>
          {footerList.map(section => (
            <div key={section.title} className={styles.listBlock}>
              <span className={styles.listTitle}>{section.title}</span>
              <ul className={styles.listWrapper}>
                {section.items.map(item => (
                  <li key={item.name}>{item.name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.bottomContent}>
          <span className={styles.copyright}>© 2021 Company, Inc. All Rights reserved</span>
          <ul className={styles.socialsWrapper}>
            {socialsList.map(item => (
              <li
                key={item.alt}
                onMouseEnter={() => handleHover(item.alt)}
                onMouseLeave={handleMouseOut}
                onClick={() => console.log(`clicked ${item.alt}`)}
                className={styles.socialsList}
              >
                <Image
                  src={isHover === item.alt ? item.imgHover : item.img}
                  alt={item.alt}
                  width={42}
                  height={42}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;