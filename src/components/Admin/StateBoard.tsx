import React from 'react';
import { FaFileInvoiceDollar, FaCoins } from 'react-icons/fa';
import styles from './StateBoard.module.scss';

type Props = {
  state: string;
  content1: string;
  content2: string;
  content3: string;
};

const StateBoard = ({ state, content1, content2, content3 }: Props) => {
  return (
    <div className={styles.board}>
      <div className={styles.title}>
        {state === '주문 현황' ? (
          <FaFileInvoiceDollar className={styles.icon} />
        ) : (
          <FaCoins className={styles.icon} />
        )}
        <h3>{state}</h3>
      </div>
      <hr />
      <div>
        <span>{content1}</span>
        <span>{state === '주문 현황' ? '건' : '개'}</span>
      </div>
      <div>
        <span>{content2}</span>
        <span>{state === '주문 현황' ? '건' : '원'}</span>
      </div>
      <div>
        <span>{content3}</span>
        <span>건</span>
      </div>
    </div>
  );
};

export default StateBoard;
