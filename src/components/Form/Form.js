/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { BsWhatsapp, BsMailbox } from 'react-icons/bs';
import styles from './Form.module.css';

class Form extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>ASESORÍA PROFESIONAL Y PERSONALIZADA</h2>
        <p>
          Háganos su consulta diligenciando el siguiente formulario,
          escribiéndonos al WhatsApp,
          o escribiéndonos un correo.
        </p>
        <form name="contact" netlify>
          <p>
            <label>
              Name
              {' '}
              <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Email
              {' '}
              <input type="email" name="email" />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
        <div>
          <a href="https://api.whatsapp.com/send?phone=573197292278">
            <BsWhatsapp className={styles.icon} />
          </a>
          <a href="mailto:freshtech.colombia@gmail.com">
            <BsMailbox className={styles.icon} />
          </a>
        </div>
      </div>
    );
  }
}

export default Form;
