import styles from "./Main.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import "../configs/fonts.js";
import car from "../images/car.jpg";
import repairs from "../images/repair.jpg";
import drillbits from "../images/drillbit.jpg";
import Link from "next/link";
import Footer from "./Footer";

const Main = () => {
  return (
    <div className="mt-[80px]">
      <div className={styles.container}>
        <div className={`${styles.panel} row-span-2 col-span-1`}>
          <p className="relative z-[1] text-[40px] font-[500]">Used Cars</p>
          <p className="relative z-[1] text-[50px] font-[600]">Collection</p>
          <div>
            <Link href="/inventory" className={styles.btn}>
              <FontAwesomeIcon icon="fa-solid fa-warehouse" />
              <p>Inventory</p>
            </Link>
          </div>
          <Image src={car} alt="car" className="absolute w-[90%] bottom-0 right-0" />
        </div>

        <div className={styles.panel}>
          <h2 className="relative z-[1] text-[40px] font-[500]">Services and</h2>
          <h1 className="relative z-[1] text-[50px] font-[600]">Repairs</h1>
          <div>
            <Link href="/repair" className={styles.btn}>
              <FontAwesomeIcon icon="fa-solid fa-screwdriver-wrench" />
              <p>Services</p>
            </Link>
          </div>
          <Image src={repairs} alt="repairs" className="absolute w-[50%] bottom-[50px] right-[30px]" />
        </div>

        <div className={styles.panel}>
          <h2 className="relative z-[1] text-[40px] font-[500]">Scheduled</h2>
          <h1 className="relative z-[1] text-[50px] font-[600]">Maintenance</h1>
          <div>
            <Link href="/maintenance" className={styles.btn}>
              <FontAwesomeIcon icon="fa-solid fa-hammer" />
              <p>Maintenance</p>
            </Link>
          </div>
          <Image src={drillbits} alt="repairs" className="absolute w-[50%] bottom-[50px] right-[30px]" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
