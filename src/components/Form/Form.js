import React from 'react';
import { BsWhatsapp, BsMailbox } from 'react-icons/bs';
import styles from './Form.module.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      email: '',
      whatsapp: '',
      asunto: '',
      mensaje: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleInputChange(event) {
    const { target } = event;
    const { value } = target;
    const { name } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      nombre, email, whatsapp, asunto, mensaje,
    } = this.state;
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>ASESORÍA PROFESIONAL Y PERSONALIZADA</h2>
        <p>
          Háganos su consulta diligenciando el siguiente formulario,
          escribiéndonos al WhatsApp,
          o escribiéndonos un correo.
        </p>
        <form
          name="contact v1"
          method="post"
          onSubmit="submit"
          className={styles.form}
        >
          <input type="hidde" name="form-name" value="contact v1" />
          <label className={styles.label} htmlFor="name">
            <p className={styles.labelName}>Tu nombre (obligatorio)</p>
            <input
              id="name"
              name="name"
              type="text"
              value={nombre}
              onChange={this.handleInputChange}
            />
          </label>
          <label className={styles.label} htmlFor="email">
            <p className={styles.labelName}>Tu correo electrónico (obligatorio)</p>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={this.handleInputChange}
            />
          </label>
          <label className={styles.label} htmlFor="whatsapp">
            <p className={styles.labelName}>WhatsApp (obligatorio)</p>
            <input
              id="whatsapp"
              name="whatsapp"
              type="text"
              value={whatsapp}
              onChange={this.handleInputChange}
            />
          </label>
          <label className={styles.label} htmlFor="asunto">
            <p className={styles.labelName}>Asunto</p>
            <input
              id="asunto"
              name="asunto"
              type="text"
              value={asunto}
              onChange={this.handleInputChange}
            />
          </label>
          <label className={styles.label} htmlFor="mensaje">
            <p className={styles.labelName}>Tu mensaje</p>
            <textarea
              id="mensaje"
              className={styles.mensaje}
              name="mensaje"
              type="text"
              value={mensaje}
              onChange={this.handleInputChange}
            />
          </label>
          <input
            type="submit"
            value="Enviar"
            className={styles.button}
          />
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
