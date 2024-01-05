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

function Ubicacion() {
  return (
    <>
      <h2 className={`${robotoBold.className} ${styles.title_section}`}>Ubicación</h2>
      <h3 className={`${robotoBold.className} ${styles.title_section_scund}`}>Nuestra ubicación en Nicaragua</h3>
      <div className={styles.ubicacion_flex}>
        <iframe
          className={styles.map}
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3904.8333449442757!2d-86.1995128!3d11.8469366!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f741d5b5e21ec77%3A0x82b293db2b2aa4e1!2sDistrifull%20Nicaragua!5e0!3m2!1ses-419!2sni!4v1686361969588!5m2!1ses-419!2sni"
          allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        <div>
          <div className={styles.p_flex}>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="38" height="38"
              viewBox="0 0 24 24" stroke-width="1.5" stroke="#297D27" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
              <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
            </svg>
            <p className={`${styles.parrafo} ${robotoBold.className}`}>
              Del Banpro 25 metros al sur Placita La Fe, local # 5 Jinotepe, Carazo, Nicaragua.
            </p>
          </div>
          <div className={styles.p_flex}>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="38" height="38"
              viewBox="0 0 24 24" stroke-width="1.5" stroke="#297D27" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
              <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
            </svg>
            <p className={`${styles.parrafo} ${robotoBold.className}`}>
              Distrifull Calle 57 Este, Edificio Rocris, local #8B, Obarrio, Ciudad de Panamá, Panamá.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.border_line}></div>
    </>
  )
}

export default Ubicacion