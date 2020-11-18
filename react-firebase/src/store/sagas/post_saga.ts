import {  put, call , takeLatest, takeEvery} from 'redux-saga/effects';
import db from '../../apis/database/firestore';
import getAllPostsApi from '../../apis/post_repository';
import { GET_POSTS_FAILURE, GET_POSTS_REQUEST, GET_POSTS_SUCCESS, Post } from '../ducks/post';

export function* getAllPosts(){
    
    try{

        const posts : Post[]= yield call(getAllPostsApi)

        yield put({
            type : GET_POSTS_SUCCESS,
            payload : {
                posts : posts
            }
        })
    }catch(err){
        const msg :string = err.message;
        yield put({
            type : GET_POSTS_FAILURE,
            payload : {
                message : msg,
            }
        })
    }  
}

export function* watchGetAllPosts(){
    yield takeLatest(GET_POSTS_REQUEST, getAllPosts)
}