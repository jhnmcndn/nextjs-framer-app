import dynamic from "next/dynamic";
import styles from './styles.module.scss'

const Header = dynamic(() => import('../components/Header'))
const Footer = dynamic(() => import ('../components/Footer'))
const HomePage = dynamic(() => import('../pages/HomePage'))

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Header/>
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default Home;
