import { call, put, takeLatest } from 'redux-saga/effects'
import {fetchEmployees} from "../apis/employee"
import { FETCH_EMPLOYEES } from '../store/reducers'

function* fetch(){
    try{
        const employees = yield call(fetchEmployees)
        yield put({
            type : FETCH_EMPLOYEES.SUCCESS,
            payload : {
                employees : employees
            }
        })
    }catch(e){
        yield put({
            type : FETCH_EMPLOYEES.FAILURE,
            payload : {
                message : e.message
            }
        })
    }
}

export default function* sagas(){
    yield takeLatest(FETCH_EMPLOYEES.REQUEST, fetch)
}