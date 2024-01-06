import { Roboto_Condensed } from "next/font/google"
import Image from "next/image"
import Layout from "../components/layout"
import Footer from "@/components/footer"
import BotonesFlotante from "@/components/botonesflotantes"
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

function Catalogos() {
  return (
    <>
      <Layout
        title={"Nuestros Clientes"}
        description="Catálogo 2023 Promocionales, Catálogo Insumos Medicos, Catálogo Seguridad Ocupacional, Catálogo Eventos y Show, Catálogo Desarrollo"
      >
      </Layout>
      <div className={robotoNormal.className}>
        <h2 className={`${styles.title_section} ${robotoBold.className}`}>Catálogos</h2>
        <div className={`${styles.catalog_flex}`}>
          <div className={`${styles.card_catalog}`}>
            <Image
              src="/img/catalogo-2023-promocionales.png"
              width={226}
              height={320}
              alt="Catálogo Promocionales"
            />
            <h3>Catálogo 2023 Promocionales</h3>
            <a download="catalogo-1" class="btn-info" href="resource/catalogo-2023-promocionales.pdf">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-download" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                <path d="M12 17v-6"></path>
                <path d="M9.5 14.5l2.5 2.5l2.5 -2.5"></path>
              </svg>
              Ver más información
            </a>
          </div>

          <div className={`${styles.card_catalog}`}>
            <Image
              src="/img/catalogo-insumos-medicos-2.png"
              width={226}
              height={320}
              alt="Catálogo Insumos Médicos"
            />
            <h3>Catálogo Insumos Medicos</h3>
            <a download="catalogo-2" class="btn-info" href="resource/catalogo-insumos-medicos-2.pdf">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-download" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                <path d="M12 17v-6"></path>
                <path d="M9.5 14.5l2.5 2.5l2.5 -2.5"></path>
              </svg>
              Ver más información
            </a>
          </div>

          <div className={`${styles.card_catalog}`}>
            <Image
              src="/img/catalogo-seguridad-ocupacional-2.png"
              width={226}
              height={320}
              alt="Catálogo Seguridad Ocupacional"
            />
            <h3>Catálogo Seguridad Ocupacional</h3>
            <a download="catalogo-3" class="btn-info" href="resource/catalogo-seguridad-ocupacional-2.pdf">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-download" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                <path d="M12 17v-6"></path>
                <path d="M9.5 14.5l2.5 2.5l2.5 -2.5"></path>
              </svg>
              Ver más información
            </a>
          </div>

          <div className={`${styles.card_catalog}`}>
            <Image
              src="/img/Catalogo-Show.png"
              width={226}
              height={320}
              alt="Catálogo Eventos y Show"
            />
            <h3>Catálogo Eventos y Show</h3>
            <a download="catalogo-4" class="btn-info" href="resource/Catalogo Show.pdf">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-download" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                <path d="M12 17v-6"></path>
                <path d="M9.5 14.5l2.5 2.5l2.5 -2.5"></path>
              </svg>
              Ver más información
            </a>
          </div>

          <div className={`${styles.card_catalog}`}>
            <Image
              src="/img/catalogo-web.png"
              width={226}
              height={320}
              alt="Catálogo Web"
            />
            <h3>Catálogo Desarrollo</h3>
            <a download="catalogo-5" class="btn-info" href="resource/Catalogo-informacion.pdf">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-download" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                <path d="M12 17v-6"></path>
                <path d="M9.5 14.5l2.5 2.5l2.5 -2.5"></path>
              </svg>
              Ver más información
            </a>
          </div>

          <div className={`${styles.card_catalog}`}>
            <Image
              src="/img/catalogo-productos.png"
              width={226}
              height={320}
              alt="Catálogo Productos"
            />
            <h3>Catálogo Productos</h3>
            <a download="catalogo-5" class="btn-info" href="resource/Catalogo-informacion.pdf">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-download" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                <path d="M12 17v-6"></path>
                <path d="M9.5 14.5l2.5 2.5l2.5 -2.5"></path>
              </svg>
              Ver más información
            </a>
          </div>
        </div>
      </div>
      <Footer />
      <BotonesFlotante />
    </>
  )
}

export default Catalogos