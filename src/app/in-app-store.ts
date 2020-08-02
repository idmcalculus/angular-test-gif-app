import { SEARCH_ERROR, GET_RESPONSES } from './actions';
export interface IAppState {
    allResults;
    err: string;
    gifWords;
}

export const INITIAL_STATE: IAppState = {
    allResults: [],
    err: '',
    gifWords: []
};

export function rootReducer(state: IAppState, action): IAppState {
    switch (action.type) {
        case SEARCH_ERROR:
            return Object.assign({}, state, {
                err: action.err
            });
        case GET_RESPONSES:
            return Object.assign({}, state, {
                allResults: action.allResults,
                err: action.err,
                gifWords: state.gifWords.concat(Object.assign({}, action.gifWords))
            });
    }
    return state;
}
