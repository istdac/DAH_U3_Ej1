import { StudentService } from './../services/student.service';
import { Component } from '@angular/core';
import { Student } from '../models/student';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //Manejar vista
  /*Import student y servicio 
    Como servicio inyectable, se inserta en constructor
  */
 //Atributo espejo del arreglo
  public students: Student[]
  constructor(private studentService: StudentService) {
    //Hacer consulta general
    this.students = this.studentService.getStudents();

  }//constructor

}//homepage
