class Employee {
    constructor(name, employeeId, dateOfJoining, packageAmount, jobLevel, dateOfBirth, leaves, lops) {
        this.name = name;
        this.employeeId = employeeId;
        this.dateOfJoining = dateOfJoining;
        this.packageAmount = packageAmount;
        this.jobLevel = jobLevel;
        this.dateOfBirth = dateOfBirth;
        this.leaves = leaves;
        this.lops = lops;
    }

    static saveToLocalStorage(employee) {
        let employees = JSON.parse(localStorage.getItem('employees')) || [];
        employees.push(employee);
        localStorage.setItem('employees', JSON.stringify(employees));
        return employees;
    }

    static getEmployeesFromLocalStorage() {
        return JSON.parse(localStorage.getItem('employees')) || [];
    }
}

document.getElementById('employeeForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const employeeId = document.getElementById('employeeId').value;
    const dateOfJoining = document.getElementById('dateOfJoining').value;
    const packageAmount = parseFloat(document.getElementById('package').value);
    const jobLevel = document.getElementById('jobLevel').value;
    const dateOfBirth = document.getElementById('dateOfBirth').value;
    const leaves = parseInt(document.getElementById('leaves').value);
    const lops = parseInt(document.getElementById('lops').value);

    const employee = new Employee(name, employeeId, dateOfJoining, packageAmount, jobLevel, dateOfBirth, leaves, lops);
    Employee.saveToLocalStorage(employee);

    updateEmployeeTable();
    document.getElementById('employeeForm').reset(); // Reset form
});

function updateEmployeeTable() {
    const employees = Employee.getEmployeesFromLocalStorage();
    const employeeTableBody = document.querySelector('#employeeTable tbody');
    employeeTableBody.innerHTML = '';

    employees.forEach((emp, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${emp.name}</td>
            <td>${emp.employeeId}</td>
            <td>${emp.jobLevel}</td>
            <td><button onclick="generatePaySlipForEmployee(${index})">Generate Pay Slip</button></td>
        `;
        employeeTableBody.appendChild(row);
    });
}

// Initial call to populate the table on page load
updateEmployeeTable();
