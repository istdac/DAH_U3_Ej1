import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.page.html',
  styleUrls: ['./edit-student.page.scss'],
})
export class EditStudentPage implements OnInit {
  public stu: Student;
  public cn: string;
  public myForm: FormGroup;
  public validationMessage: Object;

  constructor(private stuServ: StudentService, private fb: FormBuilder, private aroute: ActivatedRoute,
    private alertController: AlertController, private toastController: ToastController) { }

  ngOnInit() {

    this.aroute.queryParams.subscribe(
      (params)=>{
        this.cn=params.cn;
      }
    );
      this.stu=this.stuServ.getStudentByControlNumber(this.cn);
    this.myForm = this.fb.group(
      {
        controlnumber:[this.cn,Validators.compose([
          Validators.required,
          Validators.minLength(7),
          Validators.maxLength(8),
          Validators.pattern('^[0-9]+$')
        ])],
        name:[this.stu.name,Validators.compose([
          Validators.required
        ])],
        curp:[this.stu.curp,Validators.compose([
          Validators.pattern(new RegExp(/^[A-Z]{4,5}[0-9]{6}[A-Z]{6}[0-9]{2}$/)),
          Validators.required,
          Validators.minLength(2)
        ])],age:[this.stu.age,Validators.compose([
          Validators.min(17),
          Validators.required,
          Validators.pattern(new RegExp(/^[0-9]+$/))
        ])],nip:[this.stu.nip,Validators.compose([
          Validators.required,
          Validators.min(9),
          Validators.max(9999),
        ])],
        email:[this.stu.email,Validators.compose([
          Validators.required,
          Validators.pattern('[a-zA-Z]+@ittepic.edu.mx'),
        ])],
        career:[this.stu.career,Validators.compose([
          Validators.required,
        ])],
        photo:[this.stu.photo,Validators.compose([
          Validators.required,
          Validators.pattern(new RegExp(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/))
        ])]

      }
    ); //Group recibe un objeto

    //Create validation messages, property name with ''
    this.validationMessage={
      controlnumber:[
        {type:'required',message:'N??mero de control obligatorio'},
        {type:'minlength',message:'El n??mero de control debe ser de 8 d??gitos'},
        {type:'maxlength',message:'El n??mero de control debe ser de 8 d??gitos'},
        {type:'pattern',message:'El n??mero de control est?? mal formado'},
      ],
      name:[
        {type:'required',message:'Nombre obligatorio'},
        {type:'minlength',message:'El nombre debe ser de al menos 1 d??gito'},
      ],
      curp:[
        {type:'required',message:'CURP obligatorio'},
        {type:'minlength',message:'El n??mero de control debe ser de al menos 2 d??gitos'},
        {type:'pattern',message:'El CURP est?? mal formado (AAAAA000000AAAAAA00) o (AAAA000000AAAAAA00)'},
      ],
      age:[
        {type:'required',message:'Edad obligatoria'},
        {type:'min',message:'La edad debe ser de al menos 17 a??os'},
        {type:'pattern',message:'La edad est?? mal formada'},

      ],
      nip:[
        {type:'required',message:'NIP obligatorio'},
        {type:'min',message:'El nip debe ser un valor mayor que 9'},
        {type:'max',message:'El nip debe ser un valor menor que 9999'},
      ],
      email:[
        {type:'required',message:'Correo obligatorio'},
        {type:'pattern',message:'El correo est?? mal formado'},
      ],
      career:[
        {type:'required',message:'Carrera obligatorio'},
      ],
      photo:[
        {type:'required',message:'Foto obligatoria'},
        {type:'pattern',message:'El url de la foto est?? mal formado'},
      ],

    };
  }

  async presentToast(position: 'top' | 'middle' | 'bottom'){
    const toast = await this.toastController.create({
      message:'Editado exitosamente',
      duration:1500,
      position,
      color:'success'
    });
    await toast.present();
  }

  async presentAlertError(){
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Aviso: ',
      message: 'NO se guardo, ??ingrese todos los campos correctamente!',
      buttons: ['OK'],
    });
    await alert.present();
  }

  public editStudent(){
    if(this.myForm.valid){
        this.stuServ.updateStudent(
          this.myForm.get('controlnumber').value,
          this.myForm.get('age').value ,
          this.myForm.get('career').value ,
          this.myForm.get('curp').value ,
          this.myForm.get('email').value ,
          this.myForm.get('name').value,
          this.myForm.get('nip').value ,
          this.myForm.get('photo').value
       );

       this.presentToast('top');

       }else{
        this.presentAlertError();

       }
  }
}
