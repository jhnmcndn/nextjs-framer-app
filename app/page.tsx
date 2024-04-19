import dynamic from "next/dynamic";
import styles from './styles.module.scss'

const Header = dynamic(() => import('../components/Header'))
const Footer = dynamic(() => import ('../components/Footer'))

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Header/>
      <main className="">
        HomePage
      </main>
      <Footer/>
    </div>
  );
}

export default Home;
