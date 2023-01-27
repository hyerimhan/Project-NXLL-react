import React from 'react';
import { Link } from 'react-router-dom';
import Tap from './Tap';
import styles from './Header.module.scss';

type Props = {};

const Header = (props: Props) => {
  return (
    <div className={styles.header}>
      <Link to='/admin'>
        <img src='./images/adminLogo.png' alt='로고' />
      </Link>
      <div className={styles.tapBox}>
        <Tap title='모든 제품 조회' />
        <Tap title='제품 추가' />
        <Tap title='전체 거래 내역' />
      </div>
      <button className={styles.login}>로그인</button>
    </div>
  );
};

export default Header;
