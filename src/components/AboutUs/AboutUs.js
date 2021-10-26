/* eslint-disable max-len */
import styles from './About.module.css';

const AboutUs = () => (
  <div className={styles.aboutContainer}>
    <div className={styles.logoContanier}>
      <img className={styles.logo} src="./images/FRESHTECH-logo-Slogan.png" alt="freshtech-logo" />
    </div>
    <h2 className={styles.tittle}>¿Porqué Nosotros?</h2>
    <div className={styles.prosContainer}>
      <span className={styles.pro}>Experiencia</span>
      <span className={styles.pro}>Calidad</span>
      <span className={styles.pro}>Buen Servicio</span>
      <span className={styles.pro}>Excelentes precios</span>
      <span className={styles.pro}>y mucho más ...</span>
    </div>
    <div>
      <h2 className={styles.tittle}>Misión</h2>
      <div className={styles.misionInformation}>
        <p>
          «Organizar la información del mundo para que todos puedan acceder a ella y usarla».
        </p>
        <p>
          Cuando tienes una pregunta, ¿qué es lo primero qué haces? Tú y otros millones de personas acuden al mismo lugar para encontrar la respuesta: Google. Larry Page, su cofundador y CEO, describió una vez el motor de búsqueda perfecto como algo capaz de entender lo que quieres y ofrecerte exactamente lo que necesitas.
        </p>
        <p>
          En consecuencia, trabajan para comprender mejor la intención de la gente al usar su buscador, al mismo tiempo que actualizan sus algoritmos para ofrecer la información más relevante y útil.
        </p>
      </div>
    </div>
    <div>
      <h2 className={styles.tittle}>Visión</h2>
      <div className={styles.misionInformation}>
        <p>
          «Cuestionar la hipótesis. Pensar en profundidad. La repetición como un estilo de vida. Detalles y más detalles. El diseño en todas partes. Integridad».
        </p>
        <p>
          En la actualidad, parece que todas las páginas de empresas B2B son idénticas. Sin embargo, InvisionApp tiene una de las mejores páginas comerciales que verás. Si vas a la página de la empresa y te desplazas hasta la sección «Nuestros valores fundamentales», coloca el cursor sobre cada uno de los símbolos y encontrarás un breve fragmento de su misión general.
        </p>
        <p>
          Cada descripción es breve, auténtica y no contiene lenguaje técnico complejo, lo que ayuda a pensar que InvisionApp es una empresa directa y confiable.
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;
