import React from 'react';
import StateBoard from './StateBoard';
import styles from './NavBar.module.scss';

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div className={styles.sideBar}>
      <StateBoard
        state='주문 현황'
        content1='신규 주문'
        content2='구매 확정'
        content3='거래 취소'
      />
      <StateBoard
        state='거래 현황'
        content1='전체 상품수'
        content2='전체 판매액'
        content3='전체 거래수'
      />
    </div>
  );
};

export default NavBar;
