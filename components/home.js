import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import products from '../data/products.json';
import Nav from './Nav/navbar.js';
import { AuthProvider } from '../context/AuthProvider.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

export default class Home extends React.Component {
  render () {
    return (
      
      <div className={styles.container}>
        <React.StrictMode>
          <BrowserRouter>
            <AuthProvider>

            </AuthProvider>
          </BrowserRouter>
        </React.StrictMode>
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
                  <p>${ 3.0 }</p>
                  <p>
                    <button className="snipcart-add-item"
                      data-item-id={product.Id_Producto}
                      data-item-image={product.Imagen}
                      data-item-name={product.Nombre}
                      data-item-price={3.0}
                    >
                      Add to Cart
                    </button>
                  </p>
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
}
