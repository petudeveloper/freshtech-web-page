import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Dropdown, DropdownItem, DropdownMenu, DropdownToggle,
} from 'reactstrap';
import { GoGrabber } from 'react-icons/go';
import { NavLink, Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import logoImg from '../../img/logo.ico';

const NavBar = () => {
  const [dropdown, setDropdown] = useState(false);
  const openCloseDropdown = () => setDropdown(!dropdown);

  const menuLinks = [
    {
      id: 1,
      link: '/',
      text: 'Inicio',
    },
    {
      id: 2,
      link: '/about-us',
      text: 'Nosotros',
    },
    {
      id: 3,
      link: '/cotizar',
      text: 'Contacto',
    },
  ];
  return (
    <div>
      <nav className={styles.navbar}>
        <Link to="/">
          <div className={styles.pageicon}>
            <img className={styles.logo} src={logoImg} alt="freshtech-logo" />
            <p className={styles.pagetitle}>FRESHTECH</p>
          </div>
        </Link>
        <ul className={styles.list}>
          {
            menuLinks.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.link}
                  activeclassname="active"
                  exact="true"
                >
                  {item.text}
                </NavLink>
              </li>
            ))
          }
        </ul>
        <Dropdown isOpen={dropdown} toggle={openCloseDropdown} className={styles.dropdown}>
          <DropdownToggle className={styles.dropdownBtn}>
            <GoGrabber />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem className={styles.dropdownItem}>
              <Link to="/">
                <span>Inicio</span>
              </Link>
            </DropdownItem>
            <DropdownItem className={styles.dropdownItem}>
              <Link to="/about-us">
                <span>Nosotros</span>
              </Link>
            </DropdownItem>
            <DropdownItem className={styles.dropdownItem}>
              <Link to="/cotizar">
                <span>Contacto</span>
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </nav>
    </div>
  );
};
export default NavBar;
