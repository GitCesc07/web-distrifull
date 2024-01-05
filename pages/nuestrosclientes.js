import { Roboto_Condensed } from "next/font/google"
import Image from "next/image"
import Layout from "../components/layout"
import Footer from "@/components/footer"
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

function NuestrosClientes() {
  return (
    <>
      <Layout
        title={"Nuestros Clientes"}
        description="Empresa Privada, Instituciones Gubernamentales y No Gubernamentales"
      >
      </Layout>
      <div className={robotoNormal.className}>
        <h2 className={`${styles.title_section} ${robotoBold.className}`}>Nuestros Clientes</h2>
        <div className={styles.flex_clientes}>
          <div className={styles.card_logo}>
            <Image
              src="/img/vision-mundial.jpg"
              width={380}
              height={130}
              alt="Visión Mundial"
            />
          </div>
          <div className={styles.card_logo}>
            <Image
              src="/img/organizacion-panamericana.png"
              width={380}
              height={130}
              alt="Organización Panamericana"
            />
          </div>
          <div className={styles.card_logo}>
            <Image
              src="/img/fiat-panis.png"
              width={380}
              height={130}
              alt="Fiat Panis"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default NuestrosClientes