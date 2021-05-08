import { POPULATE_POSTS } from '../actions/posts.actions';

export function populatePosts(state = [] as any , action: any) {
    switch(action.type) {
        case POPULATE_POSTS:
            return [
                ...action.payload.data.children
            ]
            break;
        default:
            return state;
    }
    
}

