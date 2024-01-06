import { Roboto_Condensed } from "next/font/google"
import Layout from "../components/layout"
import Clientes from "@/components/clientes"
import FooterClientes from "@/components/footerClientes"
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
      </div>
      <Clientes />
      <FooterClientes />
      <BotonesFlotante />
    </>
  )
}

export default NuestrosClientes