import Image from "next/image";
import styles from "./styles.module.scss";
import Button from "@/components/Button";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerWrapper}>
        <Image
          src="/logo.png"
          alt="Logo"
          width={72}
          height={78}
          className={styles.logo}
        />
        <Button className={styles.btnNavSign}>
          Sign up for free
        </Button>
      </div>
    </div>
  );
};

export default Header;