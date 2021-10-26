import styles from './Footer.module.css';

const Contacto = ({sede, name, cargo, cel, correo})=> (
    <div className={styles.contact}>
        <p className={`${styles.description} ${styles.sede}`}>{sede}</p>
        <p className={`${styles.description} ${styles.yellow}`}>{name}</p>
        <p className={`${styles.description} ${styles.yellow}`}>{cargo}</p>
        <p className={`${styles.description} ${styles.yellow}`}>{cel}</p>
        <a href="/" className={`${styles.description} ${styles.yellow}`}>{correo}</a>
    </div>
);

export default Contacto;