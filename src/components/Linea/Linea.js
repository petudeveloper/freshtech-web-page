import PropTypes from 'prop-types';
import { BsWhatsapp, BsMailbox } from 'react-icons/bs';
import styles from './Linea.module.css';

const Linea = ({
  name, imageUrl, info, adicional,
}) => (
  <div className={styles.container}>
    <div className={styles.imageContainer}>
      <img src={imageUrl} alt={`linea${name}`} className={styles.image} />
    </div>
    <div className={styles.infoContainer}>
      <h2 className={styles.title}>
        Linea
        {' '}
        {name}
      </h2>
      <p className={styles.info}>
        {info}
      </p>
      <p className={styles.adicional}>
        {adicional}
      </p>
      <div className={styles.masInformacionContainer}>
        <h6>Mas información</h6>
        <a href="https://api.whatsapp.com/send?phone=573197292278">
          <BsWhatsapp className={styles.icon} />
        </a>
        <a href="mailto:freshtech.colombia@gmail.com">
          <BsMailbox className={styles.icon} />
        </a>
      </div>
    </div>
  </div>
);

Linea.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  adicional: PropTypes.string.isRequired,
};

export default Linea;
