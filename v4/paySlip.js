function displayPaySlip(employee) {
          const salaryCalculator = new SalaryCalculator(employee);
          const grossIncome = salaryCalculator.calculateGrossIncome();
          const deductions = salaryCalculator.calculateDeductions();
          const netSalary = salaryCalculator.calculateNetSalary();
          const salaryComponents = employee.jobLevel.getSalaryBreakup();
          const deductionComponents = salaryCalculator.deductionComponents;
      
          const paySlipDiv = document.getElementById("paySlip");
          const payBreakupDiv = document.getElementById("payBreakup");
      
          // Displaying pay slip
          paySlipDiv.innerHTML = `
              <h3>${employee.name}'s Pay Slip</h3>
              <p>Employee ID: ${employee.employeeId}</p>
              <p>Date of Joining: ${employee.dateOfJoining}</p>
              <p>Package: ₹${employee.packageAmount}</p>
              <p>Job Level: ${employee.jobLevel.levelName}</p>
              <p>Gross Income: ₹${grossIncome.toFixed(2)}</p>
              <p>Deductions: ₹${deductions.toFixed(2)}</p>
              <p>Net Salary: ₹${netSalary.toFixed(2)}</p>
          `;
      
          // Displaying salary components
          payBreakupDiv.innerHTML = `
              <h4>Salary Breakup</h4>
              <ul>
                  <li>Basic Salary (35%): ₹${(employee.packageAmount * salaryComponents.basicSalary).toFixed(2)}</li>
                  <li>Fixed Dearness Allowance (10%): ₹${(employee.packageAmount * salaryComponents.fixedDearnessAllowance).toFixed(2)}</li>
                  <li>Variable Dearness Allowance (5%): ₹${(employee.packageAmount * salaryComponents.variableDearnessAllowance).toFixed(2)}</li>
                  <li>House Rent Allowance (15%): ₹${(employee.packageAmount * salaryComponents.houseRentAllowance).toFixed(2)}</li>
                  <li>Graduation Allowance (2%): ₹${(employee.packageAmount * salaryComponents.graduationAllowance).toFixed(2)}</li>
                  <li>Conveyance Allowance (5%): ₹${(employee.packageAmount * salaryComponents.conveyanceAllowance).toFixed(2)}</li>
                  <li>Post Allowance (8%): ₹${(employee.packageAmount * salaryComponents.postAllowance).toFixed(2)}</li>
                  <li>Special Allowance (20%): ₹${(employee.packageAmount * salaryComponents.specialAllowance).toFixed(2)}</li>
              </ul>
              <h4>Deductions</h4>
              <ul>
                  <li>Provident Fund (6%): ₹${(employee.packageAmount * deductionComponents.providentFund).toFixed(2)}</li>
                  <li>LIC: ₹${deductionComponents.lic}</li>
                  <li>Loan: ₹${deductionComponents.loan}</li>
                  <li>Professional Tax: ₹${deductionComponents.professionalTax}</li>
                  <li>Security Deposit: ₹${deductionComponents.securityDeposit}</li>
                  <li>Staff Benefit: ₹${deductionComponents.staffBenefit}</li>
                  <li>Labour Welfare Fund (2%): ₹${(employee.packageAmount * deductionComponents.labourWelfareFund).toFixed(2)}</li>
              </ul>
          `;
      }
      