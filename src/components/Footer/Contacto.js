import { PropTypes } from 'prop-types';
import styles from './Footer.module.css';

const Contacto = ({
  sede, name, cargo, cel, correo,
}) => (
  <div className={styles.contact}>
    <p className={`${styles.description} ${styles.sede}`}>{sede}</p>
    <p className={`${styles.description} ${styles.name}`}>{name}</p>
    <p className={`${styles.description} ${styles.yellow}`}>{cargo}</p>
    <p className={`${styles.description} ${styles.link}`}>
      <a href={`https://api.whatsapp.com/send?phone=57${cel}`}>{`+57 ${cel}`}</a>
    </p>
    <a href={`mailto:${correo}`} className={`${styles.description} ${styles.link}`}>{correo}</a>
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
