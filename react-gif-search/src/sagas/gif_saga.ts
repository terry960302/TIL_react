import { call, put, takeLatest } from 'redux-saga/effects'
import * as Api from '../apis/gif_api'
import { GET_GIFS_FAILURE, GET_GIFS_REQUEST, GET_GIFS_SUCCESS } from '../ducks/gif_reducer'

function* getAllGifs(action : any){
    try{
        const gifs = yield call(Api.getGifs, action.payload.keyword)

        yield put({
            type : GET_GIFS_SUCCESS,
            payload : {
                gifs : gifs
            }            
        })
        
    }catch(err){
        yield put({
            type : GET_GIFS_FAILURE,
            payload : {
                message : err.message
            }        
        })
    }
}



function* watchGetAllGifs(){
    yield takeLatest(GET_GIFS_REQUEST, getAllGifs)
}

export default watchGetAllGifs