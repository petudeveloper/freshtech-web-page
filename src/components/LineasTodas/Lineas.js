import styles from './Lineas.module.css';
import Card from './Card';

const Lineas = () => {
  const cardsInformation = {
    Industrial: 'Las aplicaciones industriales son de las más exigentes del mercado pues los resultados van ligados a la producción, los equipos deben ser durables, eficientes y fáciles de mantener.',
    Comercial: 'Los hoteles son aplicaciones comerciales grandes que por su capacidad requieren un buen estudio energético, costos de mantenimiento y vida útil.',
    Domestica: 'Haz de tu hogar un lugar tranquilo y fresco, protegido de virus y bacterias con nuestros sistemas de aire acondicionados.',
    Oficina: 'Los edificios de oficinas son los sitios donde pasamos el 60% o más de nuestro tiempo durante la semana, por ende es adecuado crear un ambiente de confort, eliminando el estrés térmico, aumentarás los niveles de producción de tu equipo de trabajo y los clientes estarán a gusto.',
    Hospitalaria: 'La calidad del aire en los hospitales es un asunto que cobra importancia cuando se trata del bienestar de los pacientes y profesionales que allí laboran, y la recuperación satisfactoria del paciente.',
  };

  return (
    <ul id="lineas-container" className={styles.container}>
      <h1 className={styles.textH1Home}>NUESTRAS LINEAS</h1>
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
