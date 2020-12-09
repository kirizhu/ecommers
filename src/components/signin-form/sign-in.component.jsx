import React, { useState } from 'react';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import './sign-in.styles.scss';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
    setPassword('');
  };
  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          value={email}
          type='email'
          label='Email'
          handleChange={(e) => setEmail(e.target.value)}
        />

        <FormInput
          name='password'
          value={password}
          type='password'
          label='Password'
          handleChange={(e) => setPassword(e.target.value)}
        />

        <CustomButton type='submit'>Sign in</CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
