import GeneralLayout from '@components/Pages/GeneralLayout';
import LoginPage from '@components/Pages/common/login/LoginPage';
import React from 'react';

const login = () => {
  return (
    <GeneralLayout>
      <LoginPage user_type="driver" />
    </GeneralLayout>
  );
};

export default login;
