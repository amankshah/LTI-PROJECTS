import { JOB_LEVELS, DEDUCTIONS } from './Data.js';

export class PaySlip {
    constructor(employee) {
        this.employee = employee;
        this.salaryComponents = JOB_LEVELS[employee.jobLevel];
    }

    calculateComponents() {
        const monthlySalary = this.employee.calculateMonthlySalary();
        const { basic, hra, bonus, medical, lta } = this.salaryComponents;

        return {
            basic: (monthlySalary * basic) / 100,
            hra: (monthlySalary * hra) / 100,
            bonus: (monthlySalary * bonus) / 100,
            medical: (monthlySalary * medical) / 100,
            lta: (monthlySalary * lta) / 100,
        };
    }

    calculateDeductions(components) {
        const pf = (components.basic * DEDUCTIONS.pf) / 100;
        const professionalTax = (components.basic * DEDUCTIONS.professionalTax) / 100;
        const tds = (components.basic * DEDUCTIONS.tds) / 100;

        return { pf, professionalTax, tds, total: pf + professionalTax + tds };
    }

    generateHTML() {
        const components = this.calculateComponents();
        const deductions = this.calculateDeductions(components);
        const netPay =
            components.basic + components.hra + components.bonus +
            components.medical + components.lta - deductions.total;

        return `
            <h2>Pay Slip</h2>
            <p><strong>Name:</strong> ${this.employee.name}</p>
            <p><strong>Employee ID:</strong> ${this.employee.employeeId}</p>
            <p><strong>Job Level:</strong> ${this.employee.jobLevel}</p>

            <h3>Income Breakdown</h3>
            <ul>
                <li>Basic: ₹${components.basic.toFixed(2)}</li>
                <li>HRA: ₹${components.hra.toFixed(2)}</li>
                <li>Bonus: ₹${components.bonus.toFixed(2)}</li>
                <li>Medical: ₹${components.medical.toFixed(2)}</li>
                <li>LTA: ₹${components.lta.toFixed(2)}</li>
            </ul>

            <h3>Deductions</h3>
            <ul>
                <li>PF: ₹${deductions.pf.toFixed(2)}</li>
                <li>Professional Tax: ₹${deductions.professionalTax.toFixed(2)}</li>
                <li>TDS: ₹${deductions.tds.toFixed(2)}</li>
                <li>Total Deductions: ₹${deductions.total.toFixed(2)}</li>
            </ul>

            <h3>Net Pay: ₹${netPay.toFixed(2)}</h3>
        `;
    }
}
