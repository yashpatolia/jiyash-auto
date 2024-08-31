import styles from "./CarElement.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import exampleCar from "../images/examplecar.jpg";
import Link from "next/link";

const CarElement = () => {
  return (
    <div className={styles.container}>
      <div>
        <Link href="/">
          <Image src={exampleCar} alt="repairs" className={styles.image} />
        </Link>
      </div>
      <div className={styles.details}>
        <div>
          <Link href="/">
            <p className="text-[17px] font-[500]">2016 Honda Civic LX</p>
            <p className="text-[17px] font-[700]">$14,750</p>
          </Link>
        </div>

        <div className={styles.info}>
          <Link href="/" className={styles.links}>
            <FontAwesomeIcon icon="fa-solid fa-info" style={{ color: "#ffffff" }} />
          </Link>
          <Link href="/" className={styles.links}>
            <FontAwesomeIcon icon="fa-solid fa-camera" />
          </Link>
        </div>

        <div className={styles.info}>
          <div className="flex flex-col items-center gap-2">
            <FontAwesomeIcon icon="fa-solid fa-gas-pump" style={{ color: "#ff6961" }} />
            <p>Gasoline</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FontAwesomeIcon icon="fa-solid fa-road" style={{ color: "#ff6961" }} />
            <p>151,172 KM</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FontAwesomeIcon icon="fa-solid fa-gears" style={{ color: "#ff6961" }} />
            <p>Manual</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarElement;

<div className="flex flex-row items-center gap-2">
  <FontAwesomeIcon icon="fa-solid fa-dollar-sign" style={{ color: "#ff6961" }} />
  <p>14,750</p>
</div>;

<Link href="/" className={styles.btn}>
  <FontAwesomeIcon icon="fa-solid fa-screwdriver-wrench" />
  <p>View</p>
</Link>;
