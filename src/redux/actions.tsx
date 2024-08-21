import { createAsyncThunk } from '@reduxjs/toolkit';
import { BlogPost, fetchBlogPostsFromAPI } from '../utils/api';

export const fetchBlogPosts = createAsyncThunk(
  'blog/fetchPosts',
  async (): Promise<BlogPost[]> => {
    return fetchBlogPostsFromAPI();
  }
);
