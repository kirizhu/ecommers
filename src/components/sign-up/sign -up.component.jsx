import React, { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signUpStart } from '../../redux/user/user.actions';
import './sign-up.styles.scss';

const SignUp = ({ signUpStart }) => {
  const [email, setEmail] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    signUpStart({ displayName, email, password });
  };

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          label='Display Name'
          handleChange={(e) => setDisplayName(e.target.value)}
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          label='Email'
          handleChange={(e) => setEmail(e.target.value)}
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          label='Password'
          handleChange={(e) => setPassword(e.target.value)}
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          label='Password'
          handleChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
