// EmployeeTable.js
import React, { useState } from "react";

const EmployeeTable = ({ employees }) => {
    const [updatedEmployees, setUpdatedEmployees] = useState(employees);

    const handleDaysChange = (index, days) => {
        const updatedEmployeesCopy = [...updatedEmployees];
        updatedEmployeesCopy[index].days = days;
        setUpdatedEmployees(updatedEmployeesCopy);
    };

    const handleSalaryPerDayChange = (index, salaryPerDay) => {
        const updatedEmployeesCopy = [...updatedEmployees];
        updatedEmployeesCopy[index].salaryPerDay = salaryPerDay;
        setUpdatedEmployees(updatedEmployeesCopy);
    };

    const calculateTotalSalary = () => {
        return updatedEmployees.reduce((total, employee) => {
            return total + employee.days * employee.salaryPerDay;
        }, 0);
    };

    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Days</th>
                        <th>Salary Per Day</th>
                        <th>Total Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {updatedEmployees.map((employee, index) => (
                        <tr key={index}>
                            <td>{employee.name}</td>
                            <td>{employee.surname}</td>
                            <td>
                                <input
                                    type="number"
                                    value={employee.days}
                                    onChange={(e) =>
                                        handleDaysChange(index, e.target.value)
                                    }
                                />
                            </td>
                            <td>
                                <input
                                    type="number"
                                    value={employee.salaryPerDay}
                                    onChange={(e) =>
                                        handleSalaryPerDayChange(
                                            index,
                                            e.target.value
                                        )
                                    }
                                />
                            </td>
                            <td>{employee.days * employee.salaryPerDay}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>Total Salary: {calculateTotalSalary()}</p>
        </div>
    );
};

export default EmployeeTable;
