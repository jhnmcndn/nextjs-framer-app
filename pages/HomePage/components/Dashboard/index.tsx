import styles from "./styles.module.scss";
import {dm_mono} from "@/app/fonts";

const Dashboard = () => {
  const numLines = 5;
  const num = ['10', '11', '12', '13', '14', '15', '16', '17', '18'];

  const renderChart = () => {
    const elements = [];

    // Generate line divs
    for (let i = 0; i < numLines; i++) {
      elements.push(
        <div
          key={`line-${i}`}
          className={styles.line}
        />
      );
    }

    // Generate number divs, adjusting the key to ensure uniqueness
    const nums = num.map((number, index) => (
      <p key={`num-${index}`} className={styles.nums}>
        {number}
      </p>
    ));

    // Wrap all nums in a single wrapperNums div
    elements.push(
      <div key="wrapper-nums" className={`${dm_mono.className} ${styles.wrapperNums}`}>
        {nums}
      </div>
    );
    return elements;
  };


  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.blurFrame}/>
      <div className={styles.blurFrame}/>
      <div className={styles.chart}>
        {renderChart()}
      </div>
      Dashboard
    </div>
  );
};

export default Dashboard;