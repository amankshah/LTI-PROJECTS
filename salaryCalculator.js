function calculateSalary(employee) {
    const salaryBreakup = {
        basicSalary: employee.packageAmount * 0.35,
        fixedDA: employee.packageAmount * 0.10,
        variableDA: employee.packageAmount * 0.05,
        houseRent: employee.packageAmount * 0.15,
        graduationAllowance: employee.packageAmount * 0.02,
        conveyance: employee.packageAmount * 0.05,
        postAllowance: employee.packageAmount * 0.08,
        specialAllowance: employee.packageAmount * 0.20
    };

    const totalIncome = Object.values(salaryBreakup).reduce((sum, val) => sum + val, 0);

    const deductions = {
        providentFund: totalIncome * 0.06,
        lic: 12000,
        loan: 0,
        professionalTax: 250,
        tds: totalIncome * 0.10
    };

    const totalDeductions = Object.values(deductions).reduce((sum, val) => sum + val, 0);

    return {
        totalIncome: totalIncome,
        totalDeductions: totalDeductions,
        netSalary: totalIncome - totalDeductions,
        salaryBreakup,
        deductions
    };
}
