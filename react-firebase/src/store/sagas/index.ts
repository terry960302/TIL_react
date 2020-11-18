import { all, fork } from 'redux-saga/effects';
import { watchGetAllPosts } from './post_saga';

export function* rootSaga(){
    yield all([
        fork(watchGetAllPosts)
    ])
}