import React from 'react';
import AdminLayout from '../AdminLayout';
import AddStopage from './AddStopage';
import StopageList from './StopageList';

const AdminStopagePage = () => {
  return (
    <AdminLayout>
      <AddStopage />
      <StopageList />
    </AdminLayout>
  );
};

export default AdminStopagePage;
