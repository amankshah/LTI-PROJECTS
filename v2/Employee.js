export class Employee {
          constructor(name, employeeId, doj, dob, packageAmount, jobLevel, lop) {
              this.name = name;
              this.employeeId = employeeId;
              this.doj = doj;
              this.dob = dob;
              this.packageAmount = packageAmount;
              this.jobLevel = jobLevel;
              this.lop = lop;
          }
      
          calculateMonthlySalary() {
              const monthlySalary = this.packageAmount / 12;
              const dailyWage = monthlySalary / 30;
              const lopDeduction = dailyWage * this.lop;
              return monthlySalary - lopDeduction;
          }
      }
      