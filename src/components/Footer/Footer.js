import styles from './Footer.module.css';
import Contacto from './Contacto';

const Footer = () => (
  <div className={styles.container}>
    <p className={styles.title}>Sómos tu aliado. Contáctanos!</p>
    <div className={styles.contactContainer}>
      <Contacto
        sede="Cordoba"
        name="David A. Mazzo"
        cargo="Ingeniero de Proyectos"
        cel="3135330750"
        correo="david.alvarez@freshtech-colombia.com"
      />
      <Contacto
        sede="Antioquia"
        name="Felipe Velazquez"
        cargo="Ingeniero de Proyectos"
        cel="3197292278"
        correo="felipe.velasquez@freshtech-colombia.com"
      />
    </div>
  </div>
);

export default Footer;
