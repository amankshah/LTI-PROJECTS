function generatePaySlipForEmployee(index) {
    const employees = Employee.getEmployeesFromLocalStorage();
    const employee = employees[index];

    const salaryDetails = calculateSalary(employee);
    displayPaySlip(employee, salaryDetails);
}

function displayPaySlip(employee, salaryDetails) {
    const paySlipContainer = document.getElementById('paySlip');
    paySlipContainer.innerHTML = `
        <h3>Pay Slip for ${employee.name} (${employee.employeeId})</h3>
        <p>Date of Joining: ${employee.dateOfJoining}</p>
        <p>Package: ₹${employee.packageAmount.toFixed(2)}</p>
        <p>Date of Birth: ${employee.dateOfBirth}</p>
        <p>Leaves Taken: ${employee.leaves}</p>
        <p>Loss of Pay (LOP): ${employee.lops}</p>

        <div class="salary-breakup">
            <div class="income-column">
                <h4>Income</h4>
                <p>Basic Salary: ₹${salaryDetails.salaryBreakup.basicSalary.toFixed(2)}</p>
                <p>Fixed DA: ₹${salaryDetails.salaryBreakup.fixedDA.toFixed(2)}</p>
                <p>Variable DA: ₹${salaryDetails.salaryBreakup.variableDA.toFixed(2)}</p>
                <p>House Rent: ₹${salaryDetails.salaryBreakup.houseRent.toFixed(2)}</p>
                <p>Graduation Allowance: ₹${salaryDetails.salaryBreakup.graduationAllowance.toFixed(2)}</p>
                <p>Conveyance: ₹${salaryDetails.salaryBreakup.conveyance.toFixed(2)}</p>
                <p>Post Allowance: ₹${salaryDetails.salaryBreakup.postAllowance.toFixed(2)}</p>
                <p>Special Allowance: ₹${salaryDetails.salaryBreakup.specialAllowance.toFixed(2)}</p>
                <h4>Total Income: ₹${salaryDetails.totalIncome.toFixed(2)}</h4>
            </div>
            <div class="deduction-column">
                <h4>Deductions</h4>
                <p>Provident Fund: ₹${salaryDetails.deductions.providentFund.toFixed(2)}</p>
                <p>LIC: ₹${salaryDetails.deductions.lic.toFixed(2)}</p>
                <p>Loan: ₹${salaryDetails.deductions.loan.toFixed(2)}</p>
                <p>Professional Tax: ₹${salaryDetails.deductions.professionalTax.toFixed(2)}</p>
                <p>TDS: ₹${salaryDetails.deductions.tds.toFixed(2)}</p>
                <h4>Total Deductions: ₹${salaryDetails.totalDeductions.toFixed(2)}</h4>
            </div>
        </div>
        <h3>Net Salary: ₹${salaryDetails.netSalary.toFixed(2)}</h3>
    `;
}
