import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '..'
import * as actions from "../store/reducers"


export function useEmployee(){
    const dispatch = useDispatch()
    const employeeState = useSelector((store : RootState) => store.employees)

    const fetchEmployees = () => {
        dispatch(actions.fetchEmployees.request("") )
    }

    return {
        employeeState,
        fetchEmployees
    }
}

export default useEmployee