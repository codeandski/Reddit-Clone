import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { populatePosts } from '../store/reducers/posts.reducers'
import { populateComments } from '../store/reducers/comments.reducer';




export const store = configureStore({
  reducer: {
   posts: populatePosts,
   comments: populateComments
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
