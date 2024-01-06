import Image from "next/image"
import styles from "../styles/sections.module.css"

function Clientes() {
  return (
    <div className={styles.grid_clientes}>
      <div className={styles.card_logo}>
        <Image
          className={styles.image}
          src="/img/vision-mundial.jpg"
          width={380}
          height={130}
          alt="Visión Mundial"
        />
      </div>
      <div className={styles.card_logo}>
        <Image
          className={styles.image}
          src="/img/organizacion-panamericana.png"
          width={380}
          height={130}
          alt="Organización Panamericana"
        />
      </div>
      <div className={styles.card_logo}>
        <Image
          className={styles.image}
          src="/img/fiat-panis.png"
          width={200}
          height={100}
          alt="Fiat Panis"
        />
      </div>
      <div className={styles.card_logo}>
        <Image
          className={styles.image}
          src="/img/empresa-portuaria-n.png"
          width={380}
          height={130}
          alt="Empresa Portuaria"
        />
      </div>
      <div className={styles.card_logo}>
        <Image
          className={styles.image}
          src="/img/ministerio-salud.png"
          width={380}
          height={130}
          alt="Minsterio de Salud"
        />
      </div>
      <div className={styles.card_logo}>
        <Image
          className={styles.image}
          src="/img/cisa-agro.png"
          width={380}
          height={130}
          alt="Cisa Agro"
        />
      </div>
      <div className={styles.card_logo}>
        <Image
          className={styles.image}
          src="/img/mega-jerusalen.png"
          width={380}
          height={130}
          alt="Mega Jerusalen"
        />
      </div>
    </div>
  )
}

export default Clientes