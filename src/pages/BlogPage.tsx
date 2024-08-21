import React from 'react';
import { Layout, Typography } from 'antd';
import BlogHeader from '../component/BlogHeader';
import BlogList from '../component/BlogList';

const { Content } = Layout;
const { Title } = Typography;

const BlogPage: React.FC = () => (
  <Layout style={{ minHeight: '100vh' }}>
    <BlogHeader />
    <Content style={{ padding: '20px 50px' }}>
      <Title>The Blog</Title>
      <BlogList />
    </Content>
  </Layout>
);

export default BlogPage;
