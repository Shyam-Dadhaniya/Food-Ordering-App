import Image from "next/image";
import styles from "../styles/Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" alt="" layout="fill"/>
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
              OH YES, WE DID. THE EPIZZA , WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            155 Sindhubhav Road
            <br/> Ahmedabad, Gujarat
            <br/> 380058
          </p>
          <p className={styles.text}>
            155 Sindhubhav Road
            <br/> Ahmedabad, Gujarat
            <br/> 380058
          </p>
          <p className={styles.text}>
            155 Sindhubhav Road
            <br/> Ahmedabad, Gujarat
            <br/> 380058
          </p>
          <p className={styles.text}>
            155 Sindhubhav Road
            <br/> Ahmedabad, Gujarat
            <br/> 380058
          </p>
        </div>
        <div className={styles.card}>
        <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            Monday - Friday: 11:00 AM - 11:00 PM
            </p>
          <p className={styles.text}>
            Saturday: 11:00 AM - 11:00 PM
            </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
