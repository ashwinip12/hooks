import { createSlice } from '@reduxjs/toolkit';
import { fetchBlogPosts } from './actions';
import { BlogPost } from '../utils/api';

interface BlogState {
  posts: BlogPost[];
  loading: boolean;
  error: string | null;
}

const initialState: BlogState = {
  posts: [],
  loading: false,
  error: null,
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBlogPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchBlogPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load posts';
      });
  },
});

export default blogSlice.reducer;
