import { Employee } from './Employee.js';
import { JOB_LEVELS } from './Data.js';

export class PaySlip {
    constructor(employee) {
        this.employee = employee;
        this.salaryComponents = JOB_LEVELS[employee.jobLevel];
    }

    // Generate component-wise salary details
    calculateComponents() {
        const { hra, pf, basic } = this.salaryComponents;
        const monthlySalary = this.employee.calculateMonthlySalary();

        return {
            basic: (monthlySalary * basic) / 100,
            hra: (monthlySalary * hra) / 100,
            pf: (monthlySalary * pf) / 100,
            totalDeductions: (monthlySalary * pf) / 100,
            netPay: monthlySalary - (monthlySalary * pf) / 100,
        };
    }

    // Generate the final pay slip HTML
    generateHTML() {
        const components = this.calculateComponents();
        return `
            <h2>Pay Slip for ${this.employee.name}</h2>
            <p>Employee ID: ${this.employee.employeeId}</p>
            <p>Job Level: ${this.employee.jobLevel}</p>
            <p>Monthly Salary (after LOP): ₹${this.employee.calculateMonthlySalary().toFixed(2)}</p>
            <h3>Income Breakdown</h3>
            <ul>
                <li>Basic: ₹${components.basic.toFixed(2)}</li>
                <li>HRA: ₹${components.hra.toFixed(2)}</li>
                <li>PF: ₹${components.pf.toFixed(2)}</li>
            </ul>
            <h3>Total Deductions</h3>
            <p>PF: ₹${components.totalDeductions.toFixed(2)}</p>
            <h3>Net Pay: ₹${components.netPay.toFixed(2)}</h3>
        `;
    }
}
