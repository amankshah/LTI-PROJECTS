class JobLevel {
          constructor(levelName, basicSalaryPercent, fixedDearnessAllowancePercent, variableDearnessAllowancePercent, houseRentAllowancePercent, graduationAllowancePercent, conveyanceAllowancePercent, postAllowancePercent, specialAllowancePercent) {
              this.levelName = levelName;
              this.salaryComponents = {
                  basicSalary: basicSalaryPercent,
                  fixedDearnessAllowance: fixedDearnessAllowancePercent,
                  variableDearnessAllowance: variableDearnessAllowancePercent,
                  houseRentAllowance: houseRentAllowancePercent,
                  graduationAllowance: graduationAllowancePercent,
                  conveyanceAllowance: conveyanceAllowancePercent,
                  postAllowance: postAllowancePercent,
                  specialAllowance: specialAllowancePercent,
              };
          }
      
          getSalaryBreakup() {
              return this.salaryComponents;
          }
      }
      
      // Sample job levels
      const jobLevels = [
          new JobLevel('Junior', 0.35, 0.10, 0.05, 0.15, 0.02, 0.05, 0.08, 0.20),
          new JobLevel('Mid', 0.40, 0.10, 0.05, 0.15, 0.02, 0.05, 0.08, 0.20),
          new JobLevel('Senior', 0.45, 0.10, 0.05, 0.15, 0.02, 0.05, 0.08, 0.20),
          new JobLevel('Lead', 0.50, 0.10, 0.05, 0.15, 0.02, 0.05, 0.08, 0.20)
      ];
      
      // Function to get a job level by name
      function getJobLevelByName(levelName) {
          return jobLevels.find(level => level.levelName.toLowerCase() === levelName.toLowerCase());
      }
      