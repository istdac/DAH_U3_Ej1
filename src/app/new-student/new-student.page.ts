import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.page.html',
  styleUrls: ['./new-student.page.scss'],
})
export class NewStudentPage implements OnInit {

  //Objeto estudiante para mandar datos
  public stu: Student;
  public myForm: FormGroup;
  public validationMessage: Object;
  /*Form builder es un servicio */
  constructor(private stuServ: StudentService, private fb: FormBuilder) {

  }//constructor

  ngOnInit() {
    //Arreglo contiene primero el valor por defecto y segundo las validaciones
    //Validators compose se hace para varias validaciones
    this.myForm = this.fb.group(
      {
        controlnumber:['',Validators.compose([
          Validators.required,
          Validators.minLength(7),
          Validators.maxLength(8),
          Validators.pattern('^[0-9]+$')
        ])]

      }
    ); //Group recibe un objeto

    //Create validation messages, property name with ''
    this.validationMessage={
      controlnumber:[
        {type:'required',message:'Número de control obligatorio'},
        {type:'minlength',message:'El número de control debe ser de 8 dígitos'},
        {type:'maxlength',message:'El número de control debe ser de 8 dígitos'},
        {type:'pattern',message:'El número de control está mal formado'},
      ]
    };
  }//ngoninit

  public newStudent(): void{
    //TODO: Construir el objeto
    
    //--
    this.stuServ.newStudent(this.stu);
  }


}//class
