import React from 'react';
import { Card, Tag } from 'antd';

interface BlogCardProps {
  title: string;
  description: string;
  tags: string[];
  date: string;
  imageUrl: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, description, tags, date, imageUrl }) => {
  return (
    <Card hoverable cover={<img alt={title} src={imageUrl} />}>
      <Card.Meta title={title} description={description} />
      <div style={{ marginTop: '10px' }}>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <div style={{ marginTop: '10px', color: '#888' }}>{date}</div>
    </Card>
  );
};

export default BlogCard;
