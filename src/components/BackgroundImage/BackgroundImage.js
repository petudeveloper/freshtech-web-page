import styles from './BackgroundImage.module.css'

const Background = props => (
    <div id="linea-container" className={styles.container}>
        <img className={styles.mainImgHome} src="./images/blended-images.jpg" alt="refresh-with-technollogy"/>
    </div>
);

export default Background;