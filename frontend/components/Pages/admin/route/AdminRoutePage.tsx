import React from 'react';
import AdminLayout from '../AdminLayout';
import RouteList from './RouteList';
import AddRoute from './AddRoute';

const AdminRoutePage = () => {
  return (
    <AdminLayout>
      <AddRoute />
      <RouteList />
    </AdminLayout>
  );
};

export default AdminRoutePage;
