import { FaShoppingCart } from 'react-icons/fa';

import styles from './Logger.module.css';

const Logger = ({ children }) => {
    return (
        <div className={containerClassName}>
          { children }
        </div>
      )
}

export default Container;