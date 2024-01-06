import { Roboto_Condensed } from "next/font/google"
import Link from "next/link"
import Image from "next/image"
import styles from "../styles/sections.module.css"
import Layout from "@/components/layout";
import BotonesFlotante from "@/components/botonesflotantes"
import Footer from "@/components/footer";

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

export default function Pagina404() {
  return (
    <>
      <Layout
        title={"Página 404"}
        description="Página no encontrada, ocurrio un error"
      >
      </Layout>
      <div className={styles.flex_notfound}>
        <div>
          <h2 className={`${robotoBold.className} ${styles.titlenotfund}`}>Oooops !</h2>
          <p className={`${robotoBold.className} ${styles.parrafonotfund}`}>Parece que no podemos encontrar la página que estás buscando.</p>
          <Link
            legacyBehavior href="/"
          >
            <a className={`${styles.button} ${robotoBold.className}`}>
              Ir a Inicio
            </a>
          </Link>
        </div>
        <div>
          <Image
            src="/img/404-error-page.png"
            width={500}
            height={300}
            alt="Logotipo Distrifull"
          />
        </div>
      </div>
      <Footer />
      <BotonesFlotante />
    </>
  )
}
