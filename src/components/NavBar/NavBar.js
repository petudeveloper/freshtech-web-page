import styles from './NavBar.module.css'

const NavBar = () => {
    return(
        <nav className={styles.navbar}>
            <img className={styles.logo} src="./images/FRESHTECH-logo.png" alt="freshtech-logo"/>
            <ul className={styles.list}>
                <li>Inicio</li>
                <li>Nosotros</li>
                <li>Servicios</li>
                <li>Lineas</li>
                <li>Contacto</li>
            </ul>
        </nav>
    )
};

export default NavBar;
