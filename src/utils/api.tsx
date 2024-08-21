export interface BlogPost {
  id: number;
  title: string;
  description: string;
  tags: string[];
  date: string;
  imageUrl: string;
}

export const fetchBlogPostsFromAPI = async (): Promise<BlogPost[]> => {
  const response = await fetch('/api/posts.json');

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data as BlogPost[];
};
