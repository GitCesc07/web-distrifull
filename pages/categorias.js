import { Roboto_Condensed } from "next/font/google"
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

function Categorias() {
  return (
    <>
      <Layout
        title={"Nuestros Clientes"}
        description="Categorías, Herramientas, Equipo Médico, Sistemas de Escritorio, Creación de Páginas Web Estaticas, Suministros de Oficina, Equipo de Seguridad Ocupacional, Equipos Ópticos"
      >
      </Layout>
      <div className={robotoNormal.className}>
        <h2 className={`${styles.title_section} ${robotoBold.className}`}>Categorías</h2>
      </div>
      <div className={`${styles.categorias_flex} ${robotoBold.className}`}>
        <div className={`${styles.list_primary}`}>
          <ul>
            <li>Creación de Páginas Web Estáticas.</li>
            <li>Sistemas de Escritorio.</li>
            <li>Herramientas.</li>
            <li>Suministros Médicos.</li>
            <li>Artículos Deportivos.</li>
            <li>Artículos Publicitarios.</li>
            <li>Mobiliario y Equipo.</li>
            <li>Iluminación.</li>
            <li>Productos de Hojalatería.</li>
            <li>Cortinas Enrollables de Acero.</li>
            <li>Remodelaciones.</li>
          </ul>
        </div>
        <div className={`${styles.list_second}`}>
          <ul>
            <li>Equipo Médico.</li>
            <li>Repuestos de Vehículo.</li>
            <li>Suministros de Oficina.</li>
            <li>Artículos de Limpieza.</li>
            <li>Sistema de Refrigeración y Aires Acondicionados.</li>
            <li>Partes Industriales.</li>
            <li>Equipo de Seguridad Ocupacional.</li>
            <li>Equipos Ópticos.</li>
            <li>Montaje de Eventos y Show.</li>
            <li>Sistemas de Cámaras.</li>
            <li>Generadores Eléctricos.</li>
          </ul>
        </div>
      </div>
      <Footer />
      <BotonesFlotante />
    </>
  )
}

export default Categorias