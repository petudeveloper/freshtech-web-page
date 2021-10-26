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
          <Link to="/nosotros">
            <li>Nosotros</li>
          </Link>
          <a href="#servicios">
            <li>Servicios</li>
          </a>
          <a href="#IndustrialCard">
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
              Inicio
            </DropdownItem>
            <DropdownItem className={styles.dropdownItem}>
              Nosotros
            </DropdownItem>
            <DropdownItem className={styles.dropdownItem}>
              Servicios
            </DropdownItem>
            <DropdownItem className={styles.dropdownItem}>
              Lineas
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
