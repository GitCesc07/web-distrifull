import { Roboto_Condensed } from "next/font/google"
import Image from "next/image"
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


function Quienessomos() {
  return (
    <>
      <h2 className={`${robotoBold.className} ${styles.title_section}`}>¿Quiénes somos?</h2>
      <div className={styles.flex_sect}>
        <Image
          src="/img/fondo.webp"
          width={560}
          height={423}
          alt="Logotipo Distrifull"
        />
        <div>
          <p className={`${styles.title_parrafo} ${robotoBold.className}`} >Distrifull Nicaragua</p>
          <p className={`${styles.parrafo} ${robotoNormal.className}`}>
            Somos una empresa importadora y comercializadora de productos y servicios de alta calidad, en diferentes líneas
            comerciales a nivel nacional para la Empresa Privada, Instituciones Gubernamentales y No Gubernamentales.
            <br /> <br />
            Somos una empresa que se enfoca como un proveedor de productos especializados y de primera calidad en suministros y
            servicios de diferentes líneas comerciales con vasta trayectoria en el mercado nacional actualmente con sede en
            Nicaragua y Panamá. Hemos tenido la oportunidad de entregar y ofrecer nuestros productos en cualquier parte del país. Estamos comprometidos con el cumplimiento de los compromisos adquiridos, con los plazos de entrega, con la repuesta
            inmediata a nuestros clientes y al acompañamiento de los proyectos.
          </p>
        </div>
      </div>
    </>
  )
}

export default Quienessomos