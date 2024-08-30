import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image src={logo} alt="Jiyash Auto Logo" width={156} height={60} />
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/inventory">Inventory</Link>
        </li>
        <li>
          <Link href="/repair">Repairs</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
