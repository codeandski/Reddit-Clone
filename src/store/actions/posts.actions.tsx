export const POPULATE_POSTS = 'POPULATE_POSTS';

export function populatePosts(payload: any) {
    return {
      type: 'POPULATE_POSTS',
      payload,
    }
  }