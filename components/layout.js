import Head from "next/head"
import Header from "./header"
import styles from "../styles/header.module.css";

function Layout({ children, title = "", description = "" }) {
  return (
    <>
      <Head>
        <title>{`Distrifull Nicaragua - ${title}`}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoengranajeB_png_100x100px.ico" />
        <link rel="icon" href="/logoengranajeB_png_144x144px.ico" />
      </Head>
      <Header>{children}</Header>
    </>
  );
}

export default Layout;