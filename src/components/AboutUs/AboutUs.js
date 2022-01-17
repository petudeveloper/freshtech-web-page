import styles from './About.module.css';

const AboutUs = () => {
  const pros = [
    'Experiencia',
    'Calidad',
    'Buen Servicio',
    'Excelentes precios',
    'y mucho más ...',
  ];
  return (
    <div className={styles.aboutContainer}>
      <h2 className={styles.tittle}>¿Porqué Nosotros?</h2>
      <div className={styles.prosContainer}>
        {
          pros.map((pro, index) => {
            const knum = index + 1;
            return (
              <span key={knum} className={styles.pro}>{pro}</span>
            );
          })
        }
      </div>
      <div>
        <h2 className={styles.tittle}>Misión</h2>
        <div className={styles.misionInformation}>
          <p>
            {`
              Buscamos suplir las necesidades térmicas, eléctricas  y energéticas, enfocándonos en la 
              constante excelencia y servicio integral, brindando asesorías, diseños, instalaciones 
              y mantenimientos en sistemas de aire acondicionado, sistemas eléctricos y energías 
              renovables, cumpliendo con los más altos estándares de calidad, servicio, confiabilidad 
              y cumplimiento. Todo esto enfocado a los sectores industriales, comerciales, 
              hospitalarios, domésticos y oficinas.
            `}
          </p>
          <p>
            {`
              Somos lo que hacemos día a día de modo que la excelencia no es un acto sino un hábito 
              porque estamos comprometidos con el desarrollo ascendente de nuestros procesos para 
              garantizar calidad y buen servicio.
            `}
          </p>
        </div>
      </div>
      <div>
        <h2 className={styles.tittle}>Visión</h2>
        <div className={styles.misionInformation}>
          <p>
            {`
              Ser una empresa líder en la planeación y ejecución de grandes proyectos de ingeniería 
              a nivel nacional e internacional, en sistemas de aire acondicionado, electricidad y 
              energías renovables, garantizando la integralidad de nuestros servicios y la 
              conservación del medio ambiente.
            `}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
