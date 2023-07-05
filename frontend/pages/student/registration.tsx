import GeneralLayout from '@components/Pages/GeneralLayout';
import RegistrationForm from '@components/Pages/common/register/RegistrationForm';
import React from 'react';

const registration = () => {
  return (
    <GeneralLayout>
      <RegistrationForm user_type="student" />
    </GeneralLayout>
  );
};

export default registration;
