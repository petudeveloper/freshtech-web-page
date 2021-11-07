import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import styles from './Lineas.module.css';

const Card = ({ name, information }) => (
  <li id={`${name}Card`} className={styles.cardContainer}>
    <img className={styles.image} src={`./images/lineas/${name}.jpg`} alt={`${name}Card`} />
    <h3 className={styles.cardName}>
      Linea
      {' '}
      {name}
    </h3>
    <p className={styles.information}>{information}</p>
    <div className={styles.buttonContainer}>
      <button type="button" className={styles.button}>
        <Link to="/cotizar" className={styles.buttonSpan}>Más Información</Link>
      </button>
    </div>
  </li>
);

Card.propTypes = {
  name: PropTypes.string.isRequired,
  information: PropTypes.string.isRequired,
};

export default Card;
