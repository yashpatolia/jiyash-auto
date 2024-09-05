import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Footer.module.css";
import logo from "../images/logo2.png";

const Footer = () => {
  return (
    <footer className="absolute w-[100%] px-[20px] pb-[20px]">
      <div className={styles.footer}>
        <div className="text-[16px]">
          <ul className="flex flex-col gap-3">
            <li className="flex gap-3 place-items-baseline">
              <FontAwesomeIcon icon="fas fa-map-marker-alt" style={{ color: "#ff6961" }} />
              <div>
                <p>1461 King Street East, Cambridge</p>
                <p>Ontario, N3H 3R3</p>
              </div>
            </li>
            <li className="flex gap-3 items-center">
              <FontAwesomeIcon icon="fa-solid fa-envelope" style={{ color: "#ff6961" }} />
              <p>jiyashautosales@gmail.com </p>
            </li>
            <li className="flex gap-3 items-center">
              <FontAwesomeIcon icon="fa-solid fa-phone" style={{ color: "#ff6961" }} />
              <p>519-653-6222</p>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center">
          <Image src={logo} alt="Jiyash Auto Logo" width={188} height={80} />
          <div className="flex gap-4 text-[20px] py-6">
            <Link href="https://www.facebook.com/jiyashauto" className={styles.socials}>
              <FontAwesomeIcon icon="fa-brands fa-facebook-f" style={{ color: "#ffffff" }} />
            </Link>
            <Link href="https://twitter.com/jiyashauto" className={styles.socials}>
              <FontAwesomeIcon icon="fa-brands fa-x-twitter" style={{ color: "#ffffff" }} />
            </Link>
            <Link href="https://www.instagram.com/jiyashauto/" className={styles.socials}>
              <FontAwesomeIcon icon="fa-brands fa-instagram" style={{ color: "#ffffff" }} />
            </Link>
          </div>
          <p className="text-[14px] font-[400]">© Copyright 2024 Jiyash Auto</p>
        </div>

        <div>
          <li className="flex gap-3 place-items-baseline">
            <FontAwesomeIcon icon="fa-solid fa-clock" style={{ color: "#ff6961" }} />
            <div className="flex flex-col gap-2">
              <p>Sales Department</p>
              <p className="text-[14px] font-[300]">Mon - Fri: 9:00 am - 5:00 pm</p>
              <p className="text-[14px] font-[300]">Sat: 9:00 am - 2:00 pm</p>
              <p className="text-[14px] font-[300]">Sun: Closed</p>
            </div>
          </li>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
