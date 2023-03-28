import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { Alert, Button, Form, Input, Typography } from 'antd';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useToken, useUser } from '../../hooks';
import { doSignIn, selectAuth } from '../../redux/auth';
import { useCookies } from 'react-cookie';
import './Login.css';

export const LoginPage = React.memo(() => {
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const history = useHistory();

  const { loading, error } = useSelector(selectAuth);

  const redirectPath = history.location.search
    ? new URLSearchParams(history.location.search).get('redirectTo')
    : '/dashboard';

  console.log(redirectPath);
  const signIn = useCallback(
    ({ email, password }) => {
      dispatch(
        doSignIn({
          email,
          password,
        })
      );
    },
    [dispatch]
  );
  const [__, setCookie] = useCookies(['loginId']);
  const { user } = useUser(false);

  useEffect(() => {
    if (user && user.id) {
      setCookie('loginId', user.id);
      history.replace(redirectPath);
    }
  }, [user, history, redirectPath, setCookie]);

  return (
    <div className='d-flex flex-column justify-content-center align-items-center login-container'>
      {error && (
        <Alert
          message='Failed!'
          description={error.response.body.content}
          type='error'
          showIcon
        />
      )}
      <Form form={form} onFinish={signIn} className='col-lg-3 col-sm-6 col-4'>
        <Form.Item>
          <div className='d-flex flex-row justify-content-center align-items-center'>
            <UserOutlined className='user-icon' />
            <Typography.Title className='text-center align-middle m-0'>
              Sign In
            </Typography.Title>
          </div>
        </Form.Item>
        <Form.Item
          name='email'
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail! (Ex: abc@xyz.com)',
            },
            { required: true, message: 'Please input your email!' },
          ]}
        >
          <Input
            disabled={loading}
            prefix={<MailOutlined />}
            placeholder='Enter the email'
          />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input
            disabled={loading}
            prefix={<LockOutlined />}
            type='password'
            placeholder='Password'
          />
        </Form.Item>
        <Form.Item>
          <Button
            loading={loading}
            type='primary'
            htmlType='submit'
            className='w-100'
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
});
