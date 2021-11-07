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
          <Link to="/cotizar">
            <li>
              Contacto
            </li>
          </Link>
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
              <a href="mailto:freshtech.colombia@gmail.com">Contacto</a>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </nav>
    </div>
  );
};
export default NavBar;
