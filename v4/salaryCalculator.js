// salaryCalculator.js

function calculateSalaryBreakup(basePackage, jobLevel, leaves, lops) {
    const incomeComponents = {
        "Basic Salary": basePackage * 0.35,
        "Fixed Dearness Allowance": basePackage * 0.10,
        "Variable Dearness Allowance": basePackage * 0.05,
        "House Rent Allowance": basePackage * 0.15,
        "Graduation Allowance": basePackage * 0.02,
        "Conveyance Allowance": basePackage * 0.05,
        "Special Allowance": basePackage * 0.28,
    };

    const totalIncome = Object.values(incomeComponents).reduce((a, b) => a + b, 0);

    const deductionComponents = {
        "Provident Fund": totalIncome * 0.12,
        "Professional Tax": totalIncome * 0.01,
        "Leave Without Pay": (basePackage / 30) * lops,
    };

    const totalDeductions = Object.values(deductionComponents).reduce((a, b) => a + b, 0);

    return {
        income: incomeComponents,
        totalIncome: totalIncome,
        deductions: deductionComponents,
        totalDeductions: totalDeductions,
    };
}
