import React from 'react';
import styles from './Tap.module.scss';

type Props = {
  title: string;
};

const Tap = ({ title }: Props) => {
  return <div className={styles.tap}>{title}</div>;
};

export default Tap;
