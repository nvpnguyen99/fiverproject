import { Alert, Spin } from 'antd';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import { useUser } from '../hooks';

const withAuthenticate = (Component) => (props) => {
  const { user, loading, isFetching, error } = useUser(true);
  const history = useHistory();

  if (isFetching || loading) {
    return (
      <Spin size='large'>
        <div style={{ width: '100vh', height: '100vh' }} />
      </Spin>
    );
  }

  if (error) {
    return (
      <Alert
        message='Failed!'
        description={error.response.body.content}
        type='error'
        showIcon
      />
    );
  }

  if (!user) {
    return (
      <Redirect
        to={{
          pathname: '/login',
          search: new URLSearchParams({
            redirectTo: history.createHref(history.location),
          }).toString(),
        }}
      />
    );
  }

  return <Component {...props} />;
};

export default withAuthenticate;
