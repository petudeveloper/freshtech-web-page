import styles from './BackgroundImage.module.css';

const Background = () => (
  <div className={styles.container}>
    <div className={styles.mainImgHome}>
      <div className={styles.textcontainer}>
        <p className={styles.titlea}>Especialistas en:</p>
        <p className={styles.titleb}>Dieseño, Instalacion y Mantenimiento</p>
        <p className={styles.titlea}>de sistemas de aire acondicionado</p>
      </div>
    </div>
  </div>
);

export default Background;
