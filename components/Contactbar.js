import styles from "./Contactbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../configs/fonts.js";

const Contactbar = () => {
  return (
    <nav className={styles.contactbar}>
      <ul className={styles.contacts}>
        <li className={styles.contact}>
          <FontAwesomeIcon
            icon="fas fa-map-marker-alt"
            style={{ color: "#ff6961" }}
          />
          <p>1461 King Street East, Cambridge, Ontario, N3H 3R3</p>
        </li>
        <li className={styles.contact}>
          <FontAwesomeIcon
            icon="fa-solid fa-clock"
            style={{ color: "#ff6961" }}
          />
          <p>9:00 AM – 5:00 PM</p>
        </li>
        <li className={styles.contact}>
          <FontAwesomeIcon
            icon="fa-solid fa-envelope"
            style={{ color: "#ff6961" }}
          />
          <p>jiyashautosales@gmail.com </p>
        </li>
        <li className={styles.contact}>
          <FontAwesomeIcon
            icon="fa-solid fa-phone"
            style={{ color: "#ff6961" }}
          />
          <p>519-653-6222</p>
        </li>
      </ul>
    </nav>
  );
};

export default Contactbar;
