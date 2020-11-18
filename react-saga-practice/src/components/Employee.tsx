import React from "react"
import { IEmployee } from "../apis/employee"
import "./Employee.css"

interface EmployeeProps{
    employee : IEmployee
}

export default function Employee({employee} : EmployeeProps){
    return (
        <div className="person">
            <div className="name">{employee.employee_name}</div>
            <p>ID : {employee.id}</p>
            <p>Age : {employee.employee_age}</p>
            <p>Salary : {employee.employee_salary}</p>
        </div>
    )
}