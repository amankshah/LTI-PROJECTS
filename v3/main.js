document.getElementById("employeeForm").addEventListener("submit", function(event) {
          event.preventDefault();
      
          const name = document.getElementById("name").value;
          const employeeId = document.getElementById("employeeId").value;
          const dateOfJoining = document.getElementById("dateOfJoining").value;
          const packageAmount = parseFloat(document.getElementById("package").value);
          const jobLevel = document.getElementById("jobLevel").value;
          const dateOfBirth = document.getElementById("dateOfBirth").value;
          const leaves = parseInt(document.getElementById("leaves").value);
          const lops = parseInt(document.getElementById("lops").value);
      
          const employee = new Employee(name, employeeId, dateOfJoining, packageAmount, jobLevel, dateOfBirth);
          employee.addLeaves(leaves);
          employee.addLops(lops);
      
          displayPaySlip(employee);
      });
      