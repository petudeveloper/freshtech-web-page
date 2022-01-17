import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import styles from './Lineas.module.css';

const Card = ({ id, name, information }) => (
  <li className={`${styles.li} col-12 col-md-6 col-xl-4 p-2`}>
    <div className={styles.cardcontainer}>
      <h3 className={styles.cardName}>
        Linea
        {' '}
        {name}
      </h3>
      <div className={styles.textcontainer}>
        <div className={`${styles.imgcontainer} ${([1, 0][id % 2]) === 0 ? 'order-sm-1' : 'order-sm-2'}`}>
          <img className="w-100 rounded shadow" src={`./images/lineas/${name}.jpg`.toLocaleLowerCase()} alt={`${name}Card`} />
        </div>
        <div className={`${styles.btnntext} ${([1, 0][id % 2]) === 0 ? 'order-sm-2' : 'order-sm-1'}`}>
          <p className={styles.information}>{information}</p>
          <div className="text-center m-0">
            <Link to={`/linea/${name.toLowerCase()}`} className={styles.moreinfolink}>Más Información</Link>
          </div>
        </div>
      </div>
    </div>
  </li>
);

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  information: PropTypes.string.isRequired,
};

export default Card;
