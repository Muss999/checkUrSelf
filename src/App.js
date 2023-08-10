import React from "react";
import EmployeeTable from "./components/EmployeeTable";

const App = () => {
    let employees = [
        { name: "SALAMAT", surname: "BAIKE", days: 20, salaryPerDay: 80 },
        { name: "Dastan", surname: "aaa", days: 15, salaryPerDay: 40 },
        { name: "Emir", surname: "bbb", days: 22, salaryPerDay: 60 },
        { name: "Sheraman", surname: "ccc", days: 15, salaryPerDay: 55 },
        { name: "Albina", surname: "kkk", days: 18, salaryPerDay: 44 },
        { name: "Azret", surname: "hhh", days: 10, salaryPerDay: 22 },
        { name: "Mirdin", surname: "Agai", days: 20, salaryPerDay: 70 },
        { name: "Bayish", surname: "zzz", days: 16, salaryPerDay: 33 },
        { name: "Adilet", surname: "Gazybekov", days: 11, salaryPerDay: 16 },
    ];
    return (
        <>
            <div>
                <h1>Employee Table</h1>
                <EmployeeTable employees={employees} />
            </div>
        </>
    );
};

export default App;
