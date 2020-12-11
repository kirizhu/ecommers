import React from 'react';
import SignIn from '../../components/signin-form/sign-in.component';
import SignUp from '../../components/sign-up/sign -up.component';
import './sign-in.styles.scss';
const SignInPage = () => {
  return (
    <div className='sign-in-sign-up'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInPage;
