import { PropTypes } from 'prop-types';
import styles from './Lineas.module.css';

const Card = ({ name, information }) => (
  <li id={`${name}Card`} className={styles.cardContainer}>
    <img className={styles.image} src={`./images/lineas/${name}.jpg`} alt={`${name}Card`} />
    <h3>
      Linea
      {name}
    </h3>
    <p className={styles.information}>{information}</p>
    <div className={styles.buttonContainer}>
      <button type="button" className={styles.button}>Más Información</button>
    </div>
  </li>
);

Card.propTypes = {
  name: PropTypes.string.isRequired,
  information: PropTypes.string.isRequired,
};

export default Card;
