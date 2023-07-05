import AdminLayout from '../AdminLayout';
import React from 'react';
import AddBus from './AddBus';
import BusList from './BusList';

const AdminBusPage = () => {
  return (
    <AdminLayout>
      <AddBus />
      <BusList />
    </AdminLayout>
  );
};

export default AdminBusPage;
