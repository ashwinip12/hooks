import React from 'react';
import { Layout, Menu, Switch } from 'antd';
import { BulbOutlined, BulbFilled } from '@ant-design/icons';

const { Header } = Layout;

const BlogHeader: React.FC = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <Header>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Menu theme={darkMode ? 'dark' : 'light'} mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Blog</Menu.Item>
          <Menu.Item key="2">Projects</Menu.Item>
          <Menu.Item key="3">About</Menu.Item>
          <Menu.Item key="4">Newsletter</Menu.Item>
        </Menu>
        <Switch
          checkedChildren={<BulbFilled />}
          unCheckedChildren={<BulbOutlined />}
          onChange={toggleDarkMode}
        />
      </div>
    </Header>
  );
};

export default BlogHeader;
