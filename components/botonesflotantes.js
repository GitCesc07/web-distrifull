import { useEffect, useState, useCallback, useRef } from "react";
import styles from "../styles/sections.module.css"

function BotonesFlotante() {

  const [scrollY, setScrollY] = useState(0);

  const onScroll = useCallback(event => {
    const { pageYOffset, scrollY } = window;
    // console.log("yOffset", pageYOffset, "scrollY", scrollY);
    setScrollY(window.pageYOffset);
  }, []);

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    }
  }, []);


  const ref = useRef(null);
  useEffect(() => {
    const handleClick = event => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };

    const element = ref.current;
    element.addEventListener('click', handleClick);

    return () => {
      element.removeEventListener('click', handleClick);
    };
  }, []);

  const refWhatsap = useRef(null);
  useEffect(() => {
    const handleClick = event => {
      window.open('https://api.whatsapp.com/send?phone=50558446774&text=%C2%A1Hola!', '_blank');
    };

    const element = refWhatsap.current;
    element.addEventListener('click', handleClick);

    return () => {
      element.removeEventListener('click', handleClick);
    };
  }, []);

  const refEmail = useRef(null);
  useEffect(() => {
    const handleClick = event => {
      // window.open('mailto:info@distrifull.com?');
      location.replace('mailto:info@distrifull.com?');
    };

    const element = refEmail.current;
    element.addEventListener('click', handleClick);

    return () => {
      element.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <div className={`${styles.go_top_container} ${scrollY ? styles.show : ""}`}>
        <div className={styles.go_top_button}
          ref={ref}
        >
          <svg xmlns="http://www.w3.org/2000/svg"
            className={styles.icon_subir}
            class="icon icon-tabler icon-tabler-chevron-up" width="44" height="44"
            viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 15l6 -6l6 6" />
          </svg>
        </div>
      </div>

      <div className={`${styles.go_top_container_w} ${scrollY ? styles.show : ""}`}>
        <div className={styles.go_top_button_w}
          ref={refWhatsap}
        >
          <svg xmlns="http://www.w3.org/2000/svg"
            className={styles.icon_whatsap}
            class="icon icon-tabler icon-tabler-brand-whatsapp" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
            <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
          </svg>
        </div>
      </div>

      <div className={`${styles.go_top_container_e} ${scrollY ? styles.show : ""}`}>
        <div className={styles.go_top_button_e}
          ref={refEmail}
        >
          <svg xmlns="http://www.w3.org/2000/svg"
            className={styles.icon_email}
            class="icon icon-tabler icon-tabler-mail" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
            <path d="M3 7l9 6l9 -6" />
          </svg>
        </div>
      </div>
    </>
  )
}

export default BotonesFlotante