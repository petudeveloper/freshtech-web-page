import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import styles from './Lineas.module.css';

const Card = ({ name, information }) => (
  <li className="col-12 col-xl p-2">
    <div className="shadow rounded h-100 p-3 d-flex flex-column justify-content-between">
      <div>
        <div>
          <img className="w-100 rounded" src={`./images/lineas/${name}.jpg`.toLocaleLowerCase()} alt={`${name}Card`} />
        </div>
        <div className="d-flex flex-column justify-content-between">
          <h3 className={styles.cardName}>
            Linea
            {' '}
            {name}
          </h3>
          <p className={styles.information}>{information}</p>
        </div>
      </div>
      <div className="w-100 text-center m-0 p-1">
        <Link to={`/linea/${name.toLowerCase()}`} className={styles.moreinfolink}>Más Información</Link>
      </div>
    </div>
  </li>
);

Card.propTypes = {
  name: PropTypes.string.isRequired,
  information: PropTypes.string.isRequired,
};

export default Card;
