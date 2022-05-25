import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import products from '../data/products.json';
import Nav from '../components/Nav/navbar.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <Nav/>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.css" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          ¡Deleitemos tu paladar juntos!
        </h1>

        <div className={styles.grid}>
          {products.map(product => {
            return (
              <div key={product.Id_Producto} className={styles.card}>
                <img className='product-img' src={product.Imagen} alt={`Preview of ${product.Nombre}`} />
                <h3>{ product.Nombre }</h3>
                <p>{ product.description }</p>
                <p>${ product.Price }</p>
                <div className={styles.buyButtonCont}>
                  <button className={styles.buyButton + ' ' + "snipcart-add-item"}
                    data-item-id={product.Id_Producto}
                    data-item-image={product.Imagen}
                    data-item-name={product.Nombre}
                    data-item-price={product.Price}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        <script async src="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.js" />
        <div hidden id="snipcart" data-api-key="OTBkZTc3NzktNjExYy00MDJkLTkxZjItYjA0YzZiZWQ2YjI5NjM3ODkwNTU1NDM1MTEzMDM5" />
      </footer>
    </div>
  )
}
