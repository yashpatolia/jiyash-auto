import styles from "./Main.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import "../configs/fonts.js";
import car from "../images/car.jpg";
import repairs from "../images/repairs.jpg";
import Link from "next/link";

const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.panel}>
        <h2 className={styles.h2}>Used Cars</h2>
        <h1 className={styles.h1}>Collection</h1>
        <div>
          <Link href="/inventory" className={styles.btn}>
            <FontAwesomeIcon icon="fa-solid fa-warehouse" />
            <p>Inventory</p>
          </Link>
        </div>
        <Image src={car} alt="car" className={styles.car} />
      </div>

      <div className={styles.panel}>
        <h2 className={styles.h2}>Services and</h2>
        <h1 className={styles.h1}>Repairs</h1>
        <div>
          <Link href="/repair" className={styles.btn}>
            <FontAwesomeIcon icon="fa-solid fa-screwdriver-wrench" />
            <p>Services</p>
          </Link>
        </div>
        <Image src={repairs} alt="repairs" className={styles.repair} />
      </div>

      <div className={styles.carSearch}>
        <FontAwesomeIcon icon="fa-solid fa-car" />
        <div>
          <h1 className={styles.carSearchh1}>Car Search</h1>
          <h2 className={styles.carSearchh2}>Find your next car</h2>
        </div>
      </div>
    </div>
  );
};

export default Main;
