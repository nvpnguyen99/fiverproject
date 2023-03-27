import { HomeOutlined, ScheduleOutlined } from '@ant-design/icons';
import { Menu as AntdMenu } from 'antd';
import React, { useCallback, useEffect } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';

const menuDefinition = [
  {
    key: '/dashboard',
    icon: <HomeOutlined />,
    label: 'Dashboard',
  },
  {
    key: '/dashboard/jobs',
    icon: <ScheduleOutlined />,
    label: 'Manage Job',
  },
];

const Menu = React.memo(() => {
  const history = useHistory();
  const { pathname } = useLocation();

  const keyMatched = [...menuDefinition]
    .reverse()
    .find(({ key }) => pathname.match(key));

  useEffect(() => {
    if (!keyMatched) {
      return;
    }
    document.title = keyMatched.label;
  }, [keyMatched]);

  const handleMenuClick = useCallback(
    ({ key }) => {
      history.push(key);
    },
    [history]
  );
  return (
    <AntdMenu
      theme='dark'
      selectedKeys={[keyMatched?.key]}
      mode='inline'
      items={menuDefinition}
      onClick={handleMenuClick}
    />
  );
});

export default Menu;
