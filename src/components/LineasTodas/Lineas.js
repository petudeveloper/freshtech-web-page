import styles from './Lineas.module.css';
import Linea from './Linea';

const Lineas = props => (
    <div id="linea-container" className={styles.container}>
        <h1 className={styles.textH1Home}>INSTALACIÓN • MANTENIMIENTO • DISEÑO</h1>
        <Linea />
    </div>
);

export default Lineas;