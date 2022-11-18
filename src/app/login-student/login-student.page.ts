import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-student',
  templateUrl: './login-student.page.html',
  styleUrls: ['./login-student.page.scss'],
})
export class LoginStudentPage implements OnInit {
  public stu: Student;
  constructor(private ss: StudentService, private router: Router) { }
  ngOnInit() {
  }

  public login(cn: string): void{
    this.router.navigate(['/view-student'],
    {
      queryParams: {controlnumber: cn}
    }
  );
  }
}
