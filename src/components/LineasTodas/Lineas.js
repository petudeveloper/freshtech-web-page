import styles from './Lineas.module.css';
import Card from './Card';

const Lineas = () => {
  const cardsInformation = {
    Industrial: 'Climatizar y mantener las temperaturas son necesidades reales y actuales de las empresas, hoteles, centros comerciales, edificios, hospitales, centros de eventos, gimnasios.',
    Comercial: 'En nuestra línea comercial encuentra un amplio portafolio de equipos de aire acondicionado, cuenta con nuestra asesoría profesional y personalizada, somos especialistas en suministro, diseño, instalación y mantenimiento.',
    Domestica: 'Disfruta de un ambiente fresco, tranquilo, protegido de virus y bacterias en tu hogar con los Aires Acondicionados que Multiaires tiene para tí.',
    Oficina: 'Vive el confort en la oficina, crea un ambiente ideal eliminando el estrés térmico, aumentarás los níveles de producción de tu equipo de trabajo y los clientes estarán a gusto.',
    Hospitalaria: 'La Línea Hospitalaria requiere de equipos con rendimiento óptimo para lograr conservar las temperaturas reglamentadas.',
  };

  return (
    <ul id="linea-container" className={styles.container}>
      <h1 className={`${styles.textH1Home} ${styles.lg}`}>INSTALACIÓN • MANTENIMIENTO • DISEÑO</h1>
      <h1 className={`${styles.textH1Home} ${styles.sm}`}>INSTALACIÓN, MANTENIMIENTO, DISEÑO</h1>
      <div className={styles.cardsContainer}>
        <Card information={cardsInformation.Industrial} name="Industrial" />
        <Card information={cardsInformation.Comercial} name="Comercial" />
        <Card information={cardsInformation.Domestica} name="Domestica" />
        <Card information={cardsInformation.Oficina} name="Oficina" />
        <Card information={cardsInformation.Hospitalaria} name="Hospitalaria" />
      </div>
    </ul>
  );
};

export default Lineas;
