import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/user.model';
import { EmployeesService } from 'src/app/services/employees.service';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  addEmployeeRequest: Employee = {
    id: '',
    name: '',
    lastname: '',
    birthdate: '',
    email: '',
    phone: '',

  };

  constructor(private employeeService: EmployeesService, private router: Router) {

  }


  ngOnInit(): void {

  }
  addEmployee() {
    this.employeeService.addEmployee(this.addEmployeeRequest)
      .subscribe({
        next: (employee) => {
          this.router.navigate(['employees']);

        }
      });

  }


}
