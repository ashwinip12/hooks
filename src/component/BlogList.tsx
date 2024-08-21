// import React, { useEffect, useState } from 'react';
// import { Row, Col } from 'antd';
// import BlogCard from './BlogCard';
// import { fetchBlogPosts, BlogPost } from '../utils/api';

// const BlogList: React.FC = () => {
//   const [posts, setPosts] = useState<BlogPost[]>([]);

//   useEffect(() => {
//     fetchBlogPosts().then((data) => setPosts(data));
//   }, []);

//   return (
//     <Row gutter={16}>
//       {posts.map((post) => (
//         <Col span={8} key={post.id}>
//           <BlogCard
//             title={post.title}
//             description={post.description}
//             tags={post.tags}
//             date={post.date}
//             imageUrl={post.imageUrl}
//           />
//         </Col>
//       ))}
//     </Row>
//   );
// };

// export default BlogList;


import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Spin, Alert } from 'antd';
import BlogCard from './BlogCard';
import { fetchBlogPosts } from '../redux/actions';
import { BlogState } from '../redux/reducers';

const BlogList: React.FC = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state: BlogState) => state);

  useEffect(() => {
    dispatch(fetchBlogPosts());
  }, [dispatch]);

  if (loading) return <Spin size="large" />;
  if (error) return <Alert message={error} type="error" />;

  return (
    <Row gutter={[16, 16]}>
      {posts.map((post) => (
        <Col xs={24} sm={12} md={8} lg={6} key={post.id}>
          <BlogCard
            title={post.title}
            description={post.description}
            tags={post.tags}
            date={post.date}
            imageUrl={post.imageUrl}
          />
        </Col>
      ))}
    </Row>
  );
};

export default BlogList;
