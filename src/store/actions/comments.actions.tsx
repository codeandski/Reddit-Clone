export const POPULATE_COMMENTS = 'POPULATE_COMMENTS';

export function populateComments(payload: any) {
    return {
      type: 'POPULATE_COMMENTS',
      payload,
    }
  }