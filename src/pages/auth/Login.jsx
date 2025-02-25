import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import SocialLogin from './SocialLogin';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import LoginRegisterTitle from '../../components/LoginRegisterTitle';
import { ImSpinner9 } from 'react-icons/im';

import { toast } from 'react-toastify';
import { createOrUpdateUser } from '../../api/userApi';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state || '/';

  const { logInUser, loading, setLoading } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ email, password }) => {
    try {
      setLoading(true);
      await logInUser(email, password);
      toast.success('Sign Up Successful');
      navigate(from);
    } catch (err) {
      //console.log(err);
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen flex flex-col justify-center'>
      <Helmet>
        <title>Learn Japanese || Login</title>
      </Helmet>
      <div>
        <LoginRegisterTitle title='Please Sign In' />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='w-3/4 lg:w-1/2 mx-auto '
        >
          <div className='form-control'>
            {/* <label className='label'>
              <span className='label-text text-green-heaven -mb-1'>Email</span>
            </label> */}
            <input
              type='email'
              {...register('email', { required: 'Email is required' })}
              placeholder='Enter Your Email'
              className='input input-bordered mb-4 text-gray-200 placeholder:text-gray-400 text-sm focus:bg-slate-700'
              autoComplete='username'
            />
            {errors.email && (
              <p className='text-red-500 mt-2'>{errors.email.message}</p>
            )}
          </div>
          <div className='form-control relative flex flex-col mt-1'>
            {/* <label className='label -mb-1'>
              <span className='label-text'>Password</span>
            </label> */}
            <input
              type={showPassword ? 'text' : 'password'}
              {...register('password', { required: 'Password is required' })}
              placeholder='Password'
              autoComplete='current-password'
              className='input input-bordered mb-4 text-gray-200 placeholder:text-gray-400 text-sm focus:bg-slate-700'
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className='absolute top-4 right-8 cursor-pointer text-gray-200 text-lg'
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.password && (
              <p className='text-red-500 mt-2'>{errors.password.message}</p>
            )}
            {/* <label className='label'>
              <a href='#' className='label-text-alt link link-hover text-base'>
                Forgot password?
              </a>
            </label> */}
          </div>
          <div className='form-control'>
            <button
              type='submit'
              disabled={loading}
              className='btn bg-green-800 text-gray-200
              hover:bg-green-heaven'
            >
              {loading ? (
                <ImSpinner9 className='animate-spin m-auto text-deep-ocean' />
              ) : (
                'Sign In'
              )}
            </button>
          </div>
          <SocialLogin />
        </form>
        <p className='text-center py-2 w-3/4 lg:w-1/2 mx-auto text-lg pt-6 pb-4 '>
          Do not have an account{' '}
          <Link className='text-blue-600 font-bold' to='/register'>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
