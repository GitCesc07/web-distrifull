import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import styles from "../styles/header.module.css"
import { useState } from "react"

import { Roboto_Condensed } from "next/font/google";

export const robotoBold = Roboto_Condensed({
  weight: ["700"],
  style: ["normal"],
  subsets: ["latin"],
});

function Header() {
  const router = useRouter()

  const [menu, setmenu] = useState(false)

  const toggleMenu = () => {
    setmenu(!menu)
  }

  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        <Link legacyBehavior href="/">
          <a>
            <div className={styles.logo_flex}>
              <Image
                src="/img/logoblanco_png_500x500px.png"
                width={128}
                height={128}
                alt="Logotipo Distrifull"
              />
              <div className={styles.title}>
                <h1 className={robotoBold.className}>Distrifull</h1>
                <h2 className={robotoBold.className}>Nicaragua</h2>
              </div>
            </div>
          </a>
        </Link>

        <button onClick={toggleMenu} className={styles.cabecera_buttom}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-menu-2"
            className={styles.cabecera_svg}
            width="38"
            height="38"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#297D27"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </button>

        <nav className={`${styles.navegacion} ${menu ? styles.isActive : ""}`}>
          <Link legacyBehavior href="/nuestrosclientes">
            <a
              className={`
                ${router.pathname === "/nuestrosclientes" ? styles.active : ""}
                ${robotoBold.className}
              `}
            >
              Nuestros Clientes
            </a>
          </Link>

          <Link legacyBehavior href="/categorias">
            <a
              className={`
                ${router.pathname === "/categorias" ? styles.active : ""}
                ${robotoBold.className}
              `}
            >
              Categorías
            </a>
          </Link>

          <Link legacyBehavior href="/catalogos">
            <a
              className={`
                ${router.pathname === "/catalogos" ? styles.active : ""}
                ${robotoBold.className}
              `}
            >
              Catálogos
            </a>
          </Link>
        </nav>
      </div>
      <div className={styles.border_line}></div>
    </header>
  );
}

export default Header;
