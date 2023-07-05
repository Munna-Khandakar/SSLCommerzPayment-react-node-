import React from 'react';
import AdminLayout from '../AdminLayout';
import StudentList from './StudentList';

const AdminStudentPage = () => {
  return (
    <AdminLayout>
      <StudentList />
    </AdminLayout>
  );
};

export default AdminStudentPage;
