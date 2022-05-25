import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Location.module.css'
import products from '../data/products.json';
import Nav from '../components/Nav/navbar.js'

export default function Location() {
  return (
    <div className={styles.container}>
      <Head>
        <Nav/>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.css" />
      </Head>

      <main className={styles.main}>
        <img className={styles.redesImg} src='/assets/fondo_redes.jpg'>
          
        </img>
        <div className={styles.mapCont}>
          <h2 className={styles.title}>Ven a visitarnos</h2>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15906.377337012565!2d-74.0556913!3d4.6661886!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2d60fc8274e1c74e!2sYogen%20Fr%C3%BCz!5e0!3m2!1ses-419!2sco!4v1653474327996!5m2!1ses-419!2sco" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>          
          <div className={styles.infoCont}>
            <p>Centro Comercial Atlantis Plaza Calle 81 # 13 - 04</p>
            <p>Piso 5, Local 411, Bogotá, Cundinamarca</p>

          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <script async src="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.js" />
        <div hidden id="snipcart" data-api-key="OTBkZTc3NzktNjExYy00MDJkLTkxZjItYjA0YzZiZWQ2YjI5NjM3ODkwNTU1NDM1MTEzMDM5" />
      </footer>
    </div>
  )
}
