import styles from './Servicios.module.css';

const Servicios = () => (
  <div id="servicios-container" className={styles.container}>
    <h1 className={styles.textH1Home}>SERVICIOS</h1>
    <ul className={styles.cardsContainer}>
      <li id="asesorias-Card" className={styles.cardContainer}>
        <img className={styles.image} src="./images/servicios/Asesorias.jpg" alt="asesoriasCard" />
        <h3 className={styles.cardName}>
          Asesorias
        </h3>
        <ul className={styles.information}>
          <li>1. Proyectos de instalación de sistemas de aire acondicionado.</li>
          <li>2. Mantenimientos preventivos y correctivos.</li>
        </ul>
        <div className={styles.buttonContainer}>
          <button type="button" className={styles.button}>
            <a href="mailto:freshtech.colombia@gmail.com" className={styles.buttonSpan}>Cotizar</a>
          </button>
        </div>
      </li>
      <li id="diseño-Card" className={styles.cardContainer}>
        <img className={styles.image} src="./images/servicios/Diseño.jpg" alt="diseñoCard" />
        <h3 className={styles.cardName}>
          Diseño
        </h3>
        <ul className={styles.information}>
          <li>1. Sistemas VRF.</li>
          <li>
            2. Sistemas aire acondicionado de expansión directa tipo Split, cassette,
            piso techo, centrales, fancoil.
          </li>
          <li>3. Sistemas aires acondicionados hidrónicos.</li>
          <li>4. Sistemas de ventilación y extracción.</li>
        </ul>
        <div className={styles.buttonContainer}>
          <button type="button" className={styles.button}>
            <a href="mailto:freshtech.colombia@gmail.com" className={styles.buttonSpan}>Cotizar</a>
          </button>
        </div>
      </li>
      <li id="Instalacion-Card" className={styles.cardContainer}>
        <img className={styles.image} src="./images/servicios/Instalacion.jpg" alt="instalacionCard" />
        <h3 className={styles.cardName}>
          Instalación
        </h3>
        <ul className={styles.information}>
          <li>1. Sistemas VRF.</li>
          <li>
            2. Sistemas aire acondicionado de expansión directa tipo Split, cassette,
            piso techo, centrales, fancoil, multi v.
          </li>
          <li>3. Sistemas aires acondicionados hidrónicos.</li>
          <li>4. Sistemas de ventilación y extracción.</li>
        </ul>
        <div className={styles.buttonContainer}>
          <button type="button" className={styles.button}>
            <a href="mailto:freshtech.colombia@gmail.com" className={styles.buttonSpan}>Cotizar</a>
          </button>
        </div>
      </li>
      <li id="Mantenimiento-Card" className={styles.cardContainer}>
        <img className={styles.image} src="./images/servicios/Mantenimiento.jpg" alt="mantenimientoCard" />
        <h3 className={styles.cardName}>
          Mantenimiento
        </h3>
        <ul className={styles.information}>
          <li>1. Mantenimiento preventivo.</li>
          <li>2. Mantenimiento correctivo.</li>
          <li>3. Mantenimiento predictivo.</li>
        </ul>
        <div className={styles.buttonContainer}>
          <button type="button" className={styles.button}>
            <a href="mailto:freshtech.colombia@gmail.com" className={styles.buttonSpan}>Cotizar</a>
          </button>
        </div>
      </li>
    </ul>
  </div>
);

export default Servicios;
