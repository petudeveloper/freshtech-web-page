import { PropTypes } from 'prop-types';
import styles from './Footer.module.css';

const Contacto = ({
  sede, name, cargo, cel, correo,
}) => (
  <div className={styles.contact}>
    <p className={`${styles.description} ${styles.sede}`}>{sede}</p>
    <p className={`${styles.description} ${styles.name}`}>{name}</p>
    <p className={`${styles.description} ${styles.yellow}`}>{cargo}</p>
    <p className={`${styles.description} ${styles.yellow}`}>{cel}</p>
    <a href="/" className={`${styles.description} ${styles.correo}`}>{correo}</a>
  </div>
);

Contacto.propTypes = {
  sede: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  cargo: PropTypes.string.isRequired,
  cel: PropTypes.string.isRequired,
  correo: PropTypes.string.isRequired,
};

export default Contacto;
