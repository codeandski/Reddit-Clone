import { POPULATE_COMMENTS } from '../actions/comments.actions';

export function populateComments(state = [] as any , action: any) {
    switch(action.type) {
        case POPULATE_COMMENTS:
            return [
                ...action.payload
            ]
            break;
        default:
            return state;
    }
    
}
