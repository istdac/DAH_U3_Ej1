import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.page.html',
  styleUrls: ['./view-student.page.scss'],
})
export class ViewStudentPage implements OnInit {

  public student: Student;
  //Preparar servicio para obtener datos
  constructor(private studentService: StudentService) { }

  //Qué hacer cuando se abra la ventana
  /*
    Primero se ejecuta el constructor, ideal para consultas 
    ngOnInit se ejecuta después del constructor, el primer método que corre en el ciclo de vida, cuando se lanza la pagina

  */
  ngOnInit() {
    /*Hacer las consultas aqui para ver cómo se va cargando*/
    this.student = this.studentService.getStudentByControlNumber('32405891');
    
  }

}
