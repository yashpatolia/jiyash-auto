import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src={logo} alt="Jiyash Auto Logo" width={156} height={60} />
        </Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/">
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link href="/inventory">
            <p>Inventory</p>
          </Link>
        </li>
        <li>
          <Link href="/repair">
            <p>Repairs</p>
          </Link>
        </li>
        <li>
          <Link href="/maintenance">
            <p>Maintenance</p>
          </Link>
        </li>
        <li>
          <Link href="/login">
            <p>Login</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
