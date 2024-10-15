class SalaryCalculator {
          constructor(employee) {
              this.employee = employee;
              this.deductionComponents = {
                  providentFund: 0.06,
                  lic: 1200,
                  loan: 0,
                  professionalTax: 8,
                  securityDeposit: 200,
                  staffBenefit: 750,
                  labourWelfareFund: 0.02
              };
          }
      
          calculateGrossIncome() {
              const salaryComponents = this.employee.jobLevel.getSalaryBreakup();
              const grossIncome = this.employee.packageAmount * Object.values(salaryComponents).reduce((sum, percent) => sum + percent, 0);
              return grossIncome;
          }
      
          calculateDeductions() {
              const deductions = 
                  this.employee.packageAmount * this.deductionComponents.providentFund +
                  this.deductionComponents.lic +
                  this.deductionComponents.loan +
                  this.deductionComponents.professionalTax +
                  this.deductionComponents.securityDeposit +
                  this.deductionComponents.staffBenefit +
                  this.employee.packageAmount * this.deductionComponents.labourWelfareFund;
      
              return deductions;
          }
      
          calculateNetSalary() {
              const grossIncome = this.calculateGrossIncome();
              const deductions = this.calculateDeductions();
              return grossIncome - deductions;
          }
      }
      