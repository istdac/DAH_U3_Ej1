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
        ])],
        name:['',Validators.compose([
          Validators.required
        ])],
        curp:['',Validators.compose([
          Validators.required,
          Validators.pattern(new RegExp(/^[A-Z]{4,5}[0-9]{6}[A-Z]{6}[0-9]{2}$/)),
          Validators.minLength(2)
        ])],age:[17,Validators.compose([
          Validators.min(17),
          Validators.required
        ])],nip:['',Validators.compose([
          Validators.required,
          Validators.min(9),
          Validators.max(9999),
        ])],
        email:['',Validators.compose([
          Validators.required,
          Validators.pattern('[a-zA-Z]+@ittepic.edu.mx'),
        ])],
        career:['ISC',Validators.compose([
          Validators.required,
        ])],
        photo:['https://picsum.photos/600',Validators.compose([
          Validators.required,
          Validators.pattern('https://picsum.photos/600')
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
      ],
      name:[
        {type:'required',message:'Nombre obligatorio'},
        {type:'minlength',message:'El nombre debe ser de al menos 1 dígito'},
      ],
      curp:[
        {type:'required',message:'CURP obligatorio'},
        {type:'minlength',message:'El número de control debe ser de al menos 2 dígitos'},
        {type:'pattern',message:'El CURP está mal formado'},
      ],
      age:[
        {type:'required',message:'Edad obligatoria'},
        {type:'min',message:'La edad debe ser de al menos 17 años'},
      ],
      nip:[
        {type:'required',message:'NIP obligatorio'},
        {type:'min',message:'El nip debe ser un valor mayor que 9'},
        {type:'max',message:'El nip debe ser un valor menor que 9999'},
      ],
      email:[
        {type:'required',message:'Correo obligatorio'},
        {type:'pattern',message:'El correo está mal formado'},
      ],
      career:[
        {type:'required',message:'Carrera obligatorio'},
      ],
      photo:[
        {type:'required',message:'Foto obligatoria'},
        {type:'pattern',message:'El url de la foto está mal formado'},
      ],

    };
  }//ngoninit

  public newStudent(): void{
    //TODO: Construir el objeto
    //--
    if(this.myForm.get('controlnumber').value &&
       this.myForm.get('name').value &&
       this.myForm.get('curp').value &&
       this.myForm.get('age').value &&
       this.myForm.get('nip').value &&
       this.myForm.get('email').value &&
       this.myForm.get('career').value &&
       this.myForm.get('photo').value){
       this.stu={
          controlNumber: this.myForm.get('controlnumber').value,
          age:this.myForm.get('name').value,
          career: this.myForm.get('career').value,
          curp: this.myForm.get('curp').value,
          email: this.myForm.get('email').value,
          name: this.myForm.get('name').value,
          nip: this.myForm.get('nip').value,
          photo : this.myForm.get('photo').value
          };
       }
    this.stuServ.newStudent(this.stu);
  }


}//class
