class Employee {
    constructor(name, employeeId, dateOfJoining, packageAmount, jobLevel, dateOfBirth) {
        this.name = name;
        this.employeeId = employeeId;
        this.dateOfJoining = dateOfJoining;
        this.packageAmount = packageAmount;
        this.jobLevel = getJobLevelByName(jobLevel); // Use the job level from jobLevels.js
        this.dateOfBirth = dateOfBirth;
        this.leaves = 0;
        this.lops = 0;
    }

    addLeaves(leaves) {
        this.leaves = leaves;
    }

    addLops(lops) {
        this.lops = lops;
    }
}
