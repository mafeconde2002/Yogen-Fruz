import Link from "next/link";
import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Container from "../Container";
import styles from "./Nav.module.css";

const Nav = ({ children }) => {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    if (window.Snipcart) {
      setTotal(Snipcart.store.getState().cart.total);
    }
  });
  
  return (
    <nav className={styles.nav}>
      <Container className={styles.navContainer}>
        <p className={styles.title}>
          <Link href="/">
            <a href="/">
              <img src="/assets/logo.png" style={{ height: 8+'vh'}}/>
            </a>
          </Link>
        </p>
        <p>
          <a
              className="snipcart-checkout snipcart-summary"
              href="#"
              style={{ textDecoration: "none", fontSize: 2+'rem'}}
            >
              <FaShoppingCart />
              <span className="snipcart-total-price" style={{paddingLeft: 1+'rem'}}>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(total)}
              </span>
            </a>
        </p>
        {/* <p className={styles.autentication}>
          <span>
            <button className={styles.register}>Registrate</button>
            <button className={styles.loggin}>Inicia Sesion</button>
          </span>
        </p> */}

      </Container>
      <Container className={styles.navMenu}>
        <div>
          <a href="/" className={styles.animatedLink}>Inicio</a>
          <a href="/about" className={styles.animatedLink}>¿Quienes Somos?</a>
          {/* <a className={styles.animatedLink}>Menu</a> */}
          <a href="/location" className={styles.animatedLink}>Donde Encontrarnos</a>
          

        </div>
      </Container>
    </nav>
  );
};
export default Nav;