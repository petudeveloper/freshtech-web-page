import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import styles from './Lineas.module.css';

const Card = ({ name, information }) => (
  <li id={`${name}Card`} className="col-12 col-xl p-2">
    <div className="shadow rounded h-100 p-3">
      <div>
        <img className="w-100 rounded" src={`./images/lineas/${name}.jpg`.toLocaleLowerCase()} alt={`${name}Card`} />
      </div>
      <div className="d-flex flex-column justify-content-between border">
        <h3 className={styles.cardName}>
          Linea
          {' '}
          {name}
        </h3>
        <p className={styles.information}>{information}</p>
        <div className="w-100 text-center m-0 p-1">
          <button type="button" className="btn btn-info">
            <Link to={`/linea/${name.toLowerCase()}`} className="link-light">Más Información</Link>
          </button>
        </div>
      </div>
    </div>
  </li>
);

Card.propTypes = {
  name: PropTypes.string.isRequired,
  information: PropTypes.string.isRequired,
};

export default Card;
