import styles from "./Navbar.module.css";
import "../../index.css";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
  return (
    <header className="container">
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>
          <a href="#">
            <img src={Logo} alt="logo" />
          </a>
        </div>
        <nav className={styles.navLinks}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Eposides</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
