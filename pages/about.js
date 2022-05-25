import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/About.module.css'
import products from '../data/products.json';
import Nav from '../components/Nav/navbar.js'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <Nav/>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.css" />
      </Head>

      <main className={styles.main}>

        <div className={styles.grid}>
          <div>
              <img src='/assets/about1.png' className={styles.aboutImg}/>
          </div>
          <div>
              <h1 className={styles.title} style={{color: '#f0c71e'}}>
                ¿De donde venimos?
              </h1>
              <p>
                Yogen Früz nace en el año 1986 en Canadá donde los hermanos Aarón y Michael Serruya dan inicio a una cadena de heladerías que hoy cuenta con más de 1300 locales que opera en más de 40 países.
                <br/><br/>
                Yogen Früz, es la mejor combinación de yogurt y fruta 100% natural. Es un estilo de vida que se centra en la vida sana.
                <br/><br/>
                En Yogen Früz, tú eliges y nosotros lo mezclamos para ti.
              </p>
          </div>
          <div>
              <h1 className={styles.title} style={{color: '#ea7174'}}>
                ¿A donde vamos?
              </h1>
              <p>
                Soñamos con un mundo donde las opciones saludables son deliciosas.
                <br/><br/>
                Tu bienestar es nuestra pasión. Deleitamos a nuestros clientes con deliciosos helados de yogurt que pueden disfrutarse sin remordimiento.
                <br/><br/>
                Con el liderazgo global de nuestra marca compartimos nuestros conocimientos y pasión por las innovaciones deliciosas y saludables.
              </p>
          </div>
          <div>
              <img src='/assets/about2.png' className={styles.aboutImg}/>
          </div>
        </div>
        <div className={styles.yogenVideoCont}>
            <video className={styles.yogenVideo} controls>
                <source src='https://s3.amazonaws.com/orion-eat-app-files/orioneat-prod%2FrD39YctSQZMW4jbdS-yoguen_2018-07-07%20at%2012.26.mp4' type='video/mp4'></source>
                <source src='https://s3.amazonaws.com/orion-eat-app-files/orioneat-prod%2FrD39YctSQZMW4jbdS-yoguen_2018-07-07%20at%2012.26.mp4' type='video/ogg'></source>
            </video>
        </div>
      </main>

      <footer className={styles.footer}>
        <script async src="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.js" />
        <div hidden id="snipcart" data-api-key="OTBkZTc3NzktNjExYy00MDJkLTkxZjItYjA0YzZiZWQ2YjI5NjM3ODkwNTU1NDM1MTEzMDM5" />
      </footer>
    </div>
  )
}
