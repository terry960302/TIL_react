import axios from "axios"

export interface IEmployee{
    id : string;
    employee_name: string
    employee_salary: string
    employee_age: string
    profile_image: string
}

export const fetchEmployees = async () : Promise<IEmployee[]> => {
    try{
        const res = await axios.get("http://dummy.restapiexample.com/api/v1/employees")
        return res.data.data as Promise<IEmployee[]> 
    }catch(e){
         console.log(e)
        throw Error("Failed to fetch API")
    }
}
