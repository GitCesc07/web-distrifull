import Layout from "../components/layout"
import styles from '@/styles/Home.module.css'
import Quienessomos from "../components/quienessomos"
import Ubicacion from "@/components/ubicacion"
import Footer from "@/components/footer"
import BotonesFlotante from "@/components/botonesflotantes"
import { Roboto_Condensed } from "next/font/google"

export const roboto = Roboto_Condensed({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
});

export default function Home() {
  return (
    <>
      <Layout
        title={"Inicio"}
        description={"Distrifull Nicaragua Publicidad, Higiene, Seguridad Venta de equipos medicos, sumistros de oficinas, mobiliario, iluminacion, sistema de refrigeracion y aires acondicionados"}
      />
      <main className={`contenedor ${roboto.className}`}>
        <Quienessomos />
        <Ubicacion />
        <Footer />
        <BotonesFlotante />
      </main>
    </>
  )
}
