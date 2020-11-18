import React, { useEffect } from "react"
import Employee from "../components/Employee"
import useEmployee from "../hooks/useEmployee"

const Home : React.FC = () => {
    const {employeeState, fetchEmployees} = useEmployee()

    useEffect(() =>{
        fetchEmployees()
    }, [])

    return (
        <div>
            <h1>Home Page</h1>
            {employeeState.map((employee, index) => 
                <Employee employee={employee} key={index}/>)}
        </div>
    )
}

export default Home;