import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.page.html',
  styleUrls: ['./new-student.page.scss'],
})
export class NewStudentPage implements OnInit {

  //Objeto estudiante para mandar datos
  public stu: Student;

  constructor(private stuServ: StudentService) {

  }//constructor

  ngOnInit() {
  }//ngoninit

  public newStudent(): void{
    //TODO: Construir el objeto
    
    //--
    this.stuServ.newStudent(this.stu);
  }


}//class
