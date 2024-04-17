import dynamic from "next/dynamic";
import styles from './styles.module.scss'

const Header = dynamic(() => import('../components/Header'))

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Header/>
      <main className="">
        HomePage
      </main>
    </div>
  );
}

export default Home;
