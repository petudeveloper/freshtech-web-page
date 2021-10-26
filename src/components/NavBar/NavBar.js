import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Dropdown, DropdownItem, DropdownMenu, DropdownToggle,
} from 'reactstrap';
import { GoGrabber } from 'react-icons/go';
import styles from './NavBar.module.css';

const NavBar = () => {
  const [dropdown, setDropdown] = useState(false);

  const openCloseDropdown = () => setDropdown(!dropdown);

  return (
    <div>
      <nav className={styles.navbar}>
        <img className={styles.logo} src="./images/FRESHTECH-logo.png" alt="freshtech-logo" />
        <ul className={styles.list}>
          <li>Inicio</li>
          <li>Nosotros</li>
          <li>Servicios</li>
          <li>Lineas</li>
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
