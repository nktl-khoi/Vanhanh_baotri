import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.less';

const AppFooter = () => {
  return (
    <div className={styles.container}>
      <p>
        Copyright © 2022 | <Link to="/about">Anh Tran</Link>
      </p>
    </div>
  );
};

export default AppFooter;
