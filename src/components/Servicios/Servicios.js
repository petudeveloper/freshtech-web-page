import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import styles from './Servicios.module.css';

const Servicios = () => {
  const services = [
    {
      id: 1,
      img: './images/servicios/Asesorias.jpg',
      title: 'Asesorias',
      body: [
        '1. Proyectos de instalación de sistemas de aire acondicionado.',
        '2. Mantenimientos preventivos y correctivos.',
      ],
    },
    {
      id: 2,
      img: './images/servicios/Diseño.jpg',
      title: 'Diseño',
      body: [
        '1. Sistemas VRF.',
        '2. Sistemas aire acondicionado de expansión directa tipo Split, cassette, piso techo, centrales, fancoil.',
        '3. Sistemas aires acondicionados hidrónicos.',
        '4. Sistemas de ventilación y extracción.',
      ],
    },
    {
      id: 3,
      img: './images/servicios/Instalacion.jpg',
      title: 'Instalacion',
      body: [
        '1. Sistemas VRF.',
        '2. Sistemas aire acondicionado de expansión directa tipo Split, cassette, piso techo, centrales, fancoil, multi v.',
        '3. Sistemas aires acondicionados hidrónicos.',
        '4. Sistemas de ventilación y extracción.',
      ],
    },
    {
      id: 4,
      img: './images/servicios/Mantenimiento.jpg',
      title: 'Mantenimiento',
      body: [
        '1. Mantenimiento preventivo.',
        '2. Mantenimiento correctivo.',
        '3. Mantenimiento predictivo.',
      ],
    },
  ];
  return (
    <div id="servicios-container" className="w-100 p-0">
      <h1 className={styles.textH1Home}>SERVICIOS</h1>
      <ul className="row m-0">
        {
          services.map((service) => (
            <li key={service.id} id="asesorias-Card" className="col-md-12 col-lg-6 col-xl-3 p-1 h-100">
              <div className="position-relative rounded shadow p-2 h-100 row m-0">
                <div className="col-12 col-sm-6 col-xl-12">
                  <img className="w-100 rounded" src={service.img} alt="asesoriasCard" />
                </div>
                <div className="col-12 col-sm-6 col-xl-12 d-flex flex-column justify-content-center">
                  <h3 className={styles.cardName}>{service.title}</h3>
                  <ul className={styles.information}>
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
          ))
        }
      </ul>
    </div>
  );
};

export default Servicios;
