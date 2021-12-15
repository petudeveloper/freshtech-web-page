import styles from './Lineas.module.css';
import Card from './Card';

const Lineas = () => {
  const cardsInformation = [
    {
      id: 1,
      name: 'Industrial',
      text: 'Las aplicaciones industriales son de las más exigentes del mercado pues los resultados van ligados a la producción, los equipos deben ser durables, eficientes y fáciles de mantener.',
    },
    {
      id: 2,
      name: 'Comercial',
      text: 'Los hoteles son aplicaciones comerciales grandes que por su capacidad requieren un buen estudio energético, costos de mantenimiento y vida útil.',
    },
    {
      id: 3,
      name: 'Domestica',
      text: 'Haz de tu hogar un lugar tranquilo y fresco, protegido de virus y bacterias con nuestros sistemas de aire acondicionados.',
    },
    {
      id: 4,
      name: 'Oficina',
      text: 'Los edificios de oficinas son los sitios donde pasamos el 60% o más de nuestro tiempo durante la semana, por ende es adecuado crear un ambiente de confort, eliminando el estrés térmico, aumentarás los niveles de producción de tu equipo de trabajo y los clientes estarán a gusto.',
    },
    {
      id: 5,
      name: 'Hospitalaria',
      text: 'La calidad del aire en los hospitales es un asunto que cobra importancia cuando se trata del bienestar de los pacientes y profesionales que allí laboran, y la recuperación satisfactoria del paciente.',
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.textH1Home}>NUESTRAS LINEAS</h1>
      <ul className="row m-0 p-0">
        {
          cardsInformation.map((card) => (
            <Card
              key={card.id}
              information={card.text}
              name={card.name}
            />
          ))
        }
      </ul>
    </div>
  );
};

export default Lineas;
