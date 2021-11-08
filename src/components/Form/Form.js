import React from 'react';
import { BsWhatsapp, BsMailbox } from 'react-icons/bs';
import styles from './Form.module.css';

const Form = () => (
  <div className={styles.container}>
    <h2 className={styles.title}>ASESORÍA PROFESIONAL Y PERSONALIZADA</h2>
    <p>
      Háganos su consulta diligenciando el siguiente formulario,
      escribiéndonos al WhatsApp,
      o escribiéndonos un correo.
    </p>
    <form
      name="contactV1"
      method="post"
      onSubmit="submit"
      className={styles.form}
      netlify
    >
      <input type="hidden" name="form-name" value="contactV1" />
      <label className={styles.label} htmlFor="name">
        <p className={styles.labelName}>Tu nombre (obligatorio)</p>
        <input
          id="name"
          name="name"
          type="text"
        />
      </label>
      <label className={styles.label} htmlFor="email">
        <p className={styles.labelName}>Tu correo electrónico (obligatorio)</p>
        <input
          id="email"
          name="email"
          type="email"
        />
      </label>
      <label className={styles.label} htmlFor="whatsapp">
        <p className={styles.labelName}>WhatsApp (obligatorio)</p>
        <input
          id="whatsapp"
          name="whatsapp"
          type="text"
        />
      </label>
      <label className={styles.label} htmlFor="asunto">
        <p className={styles.labelName}>Asunto</p>
        <input
          id="asunto"
          name="asunto"
          type="text"
        />
      </label>
      <label className={styles.label} htmlFor="mensaje">
        <p className={styles.labelName}>Tu mensaje</p>
        <textarea
          id="mensaje"
          className={styles.mensaje}
          name="mensaje"
          type="text"
        />
      </label>
      <button
        type="submit"
        className={styles.button}
      >
        Enviar
      </button>
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

export default Form;
