import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from './store';

// Define the structure of a blog post
export interface BlogPost {
  id: number;
  title: string;
  description: string;
  tags: string[];
  date: string;
  imageUrl: string;
}

// Define the structure of the Redux state
export interface BlogState {
  posts: BlogPost[];
  loading: boolean;
  error: string | null;
}

// Define the type for asynchronous actions
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
