import { Employee } from './Employee.js';
import { PaySlip } from './PaySlip.js';

document.getElementById('employeeForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const employeeId = document.getElementById('employeeId').value;
    const doj = document.getElementById('doj').value;
    const dob = document.getElementById('dob').value;
    const packageAmount = parseFloat(document.getElementById('package').value);
    const jobLevel = document.getElementById('jobLevel').value;
    const lop = parseInt(document.getElementById('lop').value);

    const employee = new Employee(name, employeeId, doj, dob, packageAmount, jobLevel, lop);
    const paySlip = new PaySlip(employee);

    document.getElementById('paySlip').innerHTML = paySlip.generateHTML();
});
