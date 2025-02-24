// salaryProcessor.js

// Creating an array of employee objects
const employees = [
    { name: "Alice", salary: 45000 },
    { name: "Joseph", salary: 90000 },
    { name: "David", salary: 18500 },
    { name: "Danny", salary: 25000 },
    { name: "Yash", salary: 120000 }
  ];
  
  // Function to prompt user input
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  // Get salary threshold from the user
  readline.question('Enter the salary threshold: ', (threshold) => {
    const salaryThreshold = parseFloat(threshold);
  
    // Filter employees based on salary threshold
    const filteredEmployees = employees.filter(employee => employee.salary > salaryThreshold);
  
    // Display the filtered employee array
    console.log('Filtered Employees: ', filteredEmployees);
  
    // Get salary increase percentage from the user
    readline.question('Enter the salary increase percentage (as a decimal, e.g., 0.05 for 5%): ', (percentage) => {
      const increasePercentage = parseFloat(percentage);
  
      // Apply salary increase using map
      const updatedEmployees = filteredEmployees.map(employee => {
        return {
          name: employee.name,
          salary: employee.salary * (1 + increasePercentage)
        };
      });
  
      // Display the updated employees array
      console.log('Updated Employees with Increased Salaries: ', updatedEmployees);
  
      // Calculate total payroll cost using reduce
      const totalPayrollCost = updatedEmployees.reduce((total, employee) => total + employee.salary, 0);
  
      // Display total payroll cost
      console.log('Total Payroll Cost: ', totalPayrollCost);
  
      // Close the readline interface
      readline.close();
    });
  });