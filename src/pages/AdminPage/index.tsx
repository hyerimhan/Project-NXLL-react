import React from 'react';
import Header from '../../components/Admin/Header';
import NavBar from '../../components/Admin/NavBar';

type Props = {};

const AdminPage = (props: Props) => {
  return (
    <div>
      <Header />
      <NavBar />
    </div>
  );
};

export default AdminPage;
