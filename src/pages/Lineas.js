import React from 'react';
import { useParams } from 'react-router-dom';
import Linea from '../components/Linea/Linea';

const lineasObject = [
  {
    name: 'Industrial',
    image: '/images/lineas/industrial.jpg',
    info: 'Es parte esencial de toda empresa garantizar la salubridad, bienestar, productividad de los trabajadores y la vitalidad económica. Es por esto que a nuestros clientes de la lineas industrial les ofrecemos las más altas prestaciones, tecnología y diseño, para garantizar un alto grado de confort, rendimiento óptimo con el mínimo consumo, bajo nivel sonoro y el máximo respeto al medio ambiente.',
    adicional: 'Especialmente indicado para instalaciones de ámbitos profesionales como oficinas y comercios con sistemas VRV/ VRF (Volumen de Refrigerante Variable). ',
  },
  {
    name: 'Comercial',
    image: '/images/lineas/comercial.jpg',
    info: ' Diseñamos, suministramos, instalamos, realizamos mantenimiento y automatizamos sistemas de control ambiental para Oficinas, locales comerciales y aplicaciones residenciales, con sistema de alta eficiencia y refrigerantes ecológicos que no dañan el medio ambiente.',
    adicional: 'Especialmente indicado para instalaciones de ámbitos profesionales como Oficinas, Locales y Viviendas con sitemas de Aire Acondicionado Tipo Ducto, Pared, Techo, Paquete, Cassette y Central-Split.',
  },
  {
    name: 'Domestica',
    image: '/images/lineas/domestica.jpg',
    info: 'Contamos con personal altamente especializado en Aire Acondicionado para poder asesorarle en el sistema que más se ajuste a sus necesidades, teniendo en cuenta la ubicación idónea de las unidades interiores con la finalidad de presentar una agradable decoración interior. Abarcamos todos los campos de distribución, reparación y mantenimiento.',
    adicional: 'Especialmente indicado para instalaciones de ámbitos de tipo domestico como Casas, Apartamentos y Fincas con sitemas de Aire Acondicionado Portatiles, sitemas Split o Mini-Split y PisoTecho, Cassette.',
  },
  {
    name: 'Oficina',
    image: '/images/lineas/oficina.jpg',
    info: 'Los edificios de oficinas son los sitios donde pasamos el 70% o más de nuestro tiempo durante la semana, por ende es adecuado crear un ambiente de confort, eliminando el estrés térmico, aumentarás los niveles de producción de tu equipo de trabajo y los clientes estarán a gusto. Si es posible, antes de instalar un sistema de aire acondicionado en una oficina,  realizar un estudio previo de la zona a aclimatar y de sus focos de calor: equipos informáticos, personas y radiación solar.',
    adicional: 'Especialmente indicado para instalaciones de ámbitos profesionales como Oficinas, Locales Comerciales y Estudios con sitemas de Aire Acondicionado Tipo Ducto, Pared, Techo y Cassette.',
  },
  {
    name: 'Hospitalaria',
    image: '/images/lineas/hospitalaria.jpg',
    info: 'Diseñamos, Suministramos, Instalamos, hacemos mantenimiento y automatizamos Sistemas de flujo laminar y/o paralelo con filtración Absoluta (HEPA, 99.99%) para salas de cirugía, con sistemas de recuperación de energía y alta eficiencia energética, que proporciona ambientes controlados aptos para cirugías de alto riesgo.',
    adicional: 'Especialmente indicado para instalaciones de ámbitos profesionales como Clínicas y Hospitales cons sistemas de Aire Acondicionado tipo Paquete, Manejadora, MEC, Chiller.',
  },
];

const Lineas = () => {
  const params = useParams();
  const { id } = params;
  const lineaToRender = lineasObject.find((linea) => linea.name.toLowerCase() === id);
  return (
    <div>
      <Linea
        name={lineaToRender.name}
        imageUrl={lineaToRender.image}
        info={lineaToRender.info}
        adicional={lineaToRender.adicional}
      />
    </div>
  );
};

export default Lineas;
