import styles from './Footer.module.css';
import Contacto from './Contacto';

const Footer = ({name, information})=> (
    <div className={styles.container}>
        <p className={styles.title}>Sómos tu aliado. Contáctanos!</p>
        <div className={styles.contactContainer}>
            <Contacto 
                sede="Cordoba"
                name="David A. Mazzo"
                cargo="Ingeniero Comercial"
                cel="3135330750"
                correo="freshtech.colombia@gmail.com"
            />
            <Contacto 
                sede="Antioquia"
                name="Felipe Velazquez"
                cargo="Ingeniero de Proyectos"
                cel="3197292278"
                correo="freshtech.colombia@gmail.com"
            />
        </div>
    </div>
);

export default Footer;