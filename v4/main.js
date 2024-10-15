// main.js

document.addEventListener("DOMContentLoaded", () => {
    const employeeForm = document.getElementById("employeeForm");
    const employeeTableBody = document.getElementById("employeeTable").getElementsByTagName("tbody")[0];

    // Load existing employees from local storage
    loadEmployees();

    employeeForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const employee = {
            name: document.getElementById("name").value,
            employeeId: document.getElementById("employeeId").value,
            dateOfJoining: document.getElementById("dateOfJoining").value,
            package: parseFloat(document.getElementById("package").value),
            jobLevel: document.getElementById("jobLevel").value,
            dateOfBirth: document.getElementById("dateOfBirth").value,
            leaves: parseInt(document.getElementById("leaves").value) || 0,
            lops: parseInt(document.getElementById("lops").value) || 0,
        };

        // Save employee to local storage
        saveEmployee(employee);
        employeeForm.reset();
        loadEmployees();
    });

    function saveEmployee(employee) {
        let employees = JSON.parse(localStorage.getItem("employees")) || [];
        employees.push(employee);
        localStorage.setItem("employees", JSON.stringify(employees));
    }

    function loadEmployees() {
        const employees = JSON.parse(localStorage.getItem("employees")) || [];
        employeeTableBody.innerHTML = ""; // Clear the table body

        employees.forEach((employee, index) => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${employee.name}</td>
                <td>${employee.employeeId}</td>
                <td>${employee.jobLevel}</td>
                <td><button class="generate-pay-slip" data-index="${index}">Generate Pay Slip</button></td>
            `;

            employeeTableBody.appendChild(row);
        });

        // Add event listeners for all "Generate Pay Slip" buttons
        const buttons = document.querySelectorAll(".generate-pay-slip");
        buttons.forEach(button => {
            button.addEventListener("click", function() {
                const employeeIndex = this.getAttribute("data-index");
                fillFormAndGeneratePaySlip(employees[employeeIndex]);
            });
        });
    }

    function fillFormAndGeneratePaySlip(employee) {
        document.getElementById("name").value = employee.name;
        document.getElementById("employeeId").value = employee.employeeId;
        document.getElementById("dateOfJoining").value = employee.dateOfJoining;
        document.getElementById("package").value = employee.package;
        document.getElementById("jobLevel").value = employee.jobLevel;
        document.getElementById("dateOfBirth").value = employee.dateOfBirth;
        document.getElementById("leaves").value = employee.leaves;
        document.getElementById("lops").value = employee.lops;

        // Call the function to generate pay slip
        generatePaySlip(employee);
    }

    function generatePaySlip(employee) {
        const { name, employeeId, package: basePackage, jobLevel, leaves, lops } = employee;

        const salaryBreakup = calculateSalaryBreakup(basePackage, jobLevel, leaves, lops);

        // Show the pay slip
        const paySlipDiv = document.getElementById("paySlip");
        const payBreakupDiv = document.getElementById("payBreakup");

        paySlipDiv.innerHTML = `
            <strong>Name:</strong> ${name}<br>
            <strong>Employee ID:</strong> ${employeeId}<br>
            <strong>Job Level:</strong> ${jobLevel}<br>
            <strong>Package:</strong> ₹${basePackage}<br>
        `;

        payBreakupDiv.innerHTML = `
            <h3>Salary Breakup</h3>
            <strong>Income Components:</strong><br>
            ${Object.entries(salaryBreakup.income).map(([key, value]) => `${key}: ₹${value.toFixed(2)}`).join("<br>")}<br>
            <strong>Total Income: </strong> ₹${salaryBreakup.totalIncome.toFixed(2)}<br>
            <strong>Deduction Components:</strong><br>
            ${Object.entries(salaryBreakup.deductions).map(([key, value]) => `${key}: ₹${value.toFixed(2)}`).join("<br>")}<br>
            <strong>Total Deductions: </strong> ₹${salaryBreakup.totalDeductions.toFixed(2)}<br>
            <strong>Net Salary: </strong> ₹${(salaryBreakup.totalIncome - salaryBreakup.totalDeductions).toFixed(2)}<br>
        `;
    }
});
