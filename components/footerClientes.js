import { Roboto_Condensed } from "next/font/google"
import styles from "../styles/sections.module.css"

const robotoBold = Roboto_Condensed({
  weight: ['700'],
  style: ['normal'],
  subsets: ['latin'],
});

const robotoNormal = Roboto_Condensed({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
});


function FooterClientes() {
  return (
    <>
      <footer className={styles.footer_clientes}>
        <div className={styles.footer_flex}>
          <div class="mision">
            <h4 className={`${robotoBold.className} ${styles.title_h4}`}>Misión</h4>
            <p className={`${robotoBold.className} ${styles.parrafo}`}>
              Nuestro fin es satisfacer las necesidades de nuestros clientes dando una solución oportuna.
            </p>
          </div>

          <div class="vision">
            <h4 className={`${`${robotoBold.className} ${styles.parrafo}`} ${styles.title_h4}`}>Visión</h4>
            <p className={`${robotoBold.className} ${styles.parrafo}`}>
              Ser reconocido por nuestro cliente como su mejor opción.
            </p>
          </div>

          <div class="valores">
            <h4 className={`${`${robotoBold.className} ${styles.parrafo}`} ${styles.title_h4}`}>Valores</h4>
            <ul className={styles.lista}>
              <li className={`${robotoBold.className} ${styles.parrafo}`}>Servicio</li>
              <li className={`${robotoBold.className} ${styles.parrafo}`}>Compromiso</li>
              <li className={`${robotoBold.className} ${styles.parrafo}`}>Profesionalismo</li>
              <li className={`${robotoBold.className} ${styles.parrafo}`}>Adaptabilidad</li>
              <li className={`${robotoBold.className} ${styles.parrafo}`}>Trabajo en Equipo</li>
              <li className={`${robotoBold.className} ${styles.parrafo}`}>Diligencia</li>
            </ul>
          </div>
        </div>
        <p className={`${styles.p_footer} ${robotoBold.className}`}>
          Distrifull Nicaragua ©
        </p>
      </footer>
    </>
  )
}

export default FooterClientes