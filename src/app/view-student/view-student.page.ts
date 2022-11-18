import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.page.html',
  styleUrls: ['./view-student.page.scss'],
})
export class ViewStudentPage implements OnInit {

  public student: Student;
  //Preparar servicio para obtener datos
  constructor(private studentService: StudentService, private router: Router, private aroute: ActivatedRoute) { }

  //Qué hacer cuando se abra la ventana
  /*
    Primero se ejecuta el constructor, ideal para consultas 
    ngOnInit se ejecuta después del constructor, el primer método que corre en el ciclo de vida, cuando se lanza la pagina

  */
  ngOnInit() {
    /*Hacer las consultas aqui para ver cómo se va cargando*/
      //Recibir parámetros con activated route (servicio)
      /*Subscribe se usa en promesas de js  */
    this.aroute.queryParams.subscribe(
      (params)=>{
        //console.log(params);
        this.student = this.studentService.getStudentByControlNumber(params.controlnumber);

      }
    );//subscribe

  }//onInit
  public editStudent(){
    this.router.navigate(['/edit-student'],{
      queryParams: {cn: this.student.controlNumber}
    });
  }

}
