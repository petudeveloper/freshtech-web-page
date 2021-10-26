import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Dropdown, DropdownItem, DropdownMenu, DropdownToggle,
} from 'reactstrap';
import { GoGrabber } from 'react-icons/go';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => {
  const [dropdown, setDropdown] = useState(false);
  const openCloseDropdown = () => setDropdown(!dropdown);
  return (
    <div>
      <nav className={styles.navbar}>
        <Link to="/">
          <img className={styles.logo} src="./images/FRESHTECH-logo.png" alt="freshtech-logo" />
        </Link>
        <ul className={styles.list}>
          <Link to="/home">
            <li>Inicio</li>
          </Link>
          <Link to="/about-us">
            <li>Nosotros</li>
          </Link>
          <a href="/home#servicios-container">
            <li>Servicios</li>
          </a>
          <a href="/home#lineas-container">
            <li>Lineas</li>
          </a>
          <li>Contacto</li>
        </ul>
        <Dropdown isOpen={dropdown} toggle={openCloseDropdown} className={styles.dropdown}>
          <DropdownToggle className={styles.dropdownBtn}>
            <GoGrabber />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem className={styles.dropdownItem}>
              <Link to="/home">
                <span>Inicio</span>
              </Link>
            </DropdownItem>
            <DropdownItem className={styles.dropdownItem}>
              <Link to="/about-us">
                <span>Nosotros</span>
              </Link>
            </DropdownItem>
            <DropdownItem className={styles.dropdownItem}>
              <a href="/home#servicios-container">
                <span>Servicios</span>
              </a>
            </DropdownItem>
            <DropdownItem className={styles.dropdownItem}>
              <a href="/home#lineas-container">
                <span>Lineas</span>
              </a>
            </DropdownItem>
            <DropdownItem className={styles.dropdownItem}>
              Contacto
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </nav>
    </div>
  );
};
export default NavBar;
