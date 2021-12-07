import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import styles from './Servicios.module.css';
import ServicesData from './serviciosData';

const Servicios = () => {
  const services = ServicesData;
  return (
    <div id="servicios-container" className="w-100 p-0 shadow my-5">
      <h1 className={styles.textH1Home}>SERVICIOS</h1>
      <ul className="row m-0 p-0">
        {
          services.map((service, index) => {
            const photoDiv = `col-12 col-sm-6 col-md-12 col-xl-12 p-1 
            ${(([1, 0][index % 2]) === 0 ? 'order-sm-0' : 'order-sm-1')} 
            order-md-0
            `;
            const infoDiv = `col-12 col-sm-6 col-md-12 col-xl-12 d-flex flex-column justify-content-around 
            ${(([1, 0][index % 2]) === 0 ? 'order-sm-1' : 'order-sm-0')} 
            order-md-1
            `;
            return (
              <li key={service.id} id="asesorias-Card" className="col-sm-12 col-md-6 col-lg-6 col-xl-3 p-3">
                <div className="position-relative rounded shadow p-2 h-100 row m-0">
                  <div className={photoDiv}>
                    <img className="w-100 rounded m-0" src={service.img} alt="asesoriasCard" />
                  </div>
                  <div className={infoDiv}>
                    <h3 className={styles.cardName}>{service.title}</h3>
                    <ul className="list-style-none">
                      {
                        service.body.map((item, index) => {
                          const key = index + 1;
                          return (
                            <li key={key}>
                              {item}
                            </li>
                          );
                        })
                      }
                    </ul>
                    <div className="text-end">
                      <button type="button" className="btn btn-outline-info">
                        <Link to="/Cotizar" className="text-decoration-none">Cotizar</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default Servicios;
