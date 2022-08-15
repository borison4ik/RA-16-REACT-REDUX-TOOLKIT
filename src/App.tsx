import React from 'react';
import { Layout, Typography } from 'antd';

import { StarWars } from './components/StarWars';
import { DATA } from './data';

import './app.scss';
import { UserAvatar } from './components/UserAvatar';

const { Header, Content } = Layout;
const { Title, Text } = Typography;

export const App = () => {
  return (
    <Layout>
      <Header className='app-header'>
        <Title level={4}>
          <Text type='secondary'>{DATA.task.title}</Text>
        </Title>
      </Header>

      <Content className='app-content'>
        <div className='container'>
          <UserAvatar />
          <StarWars />
        </div>
      </Content>
    </Layout>
  );
};
