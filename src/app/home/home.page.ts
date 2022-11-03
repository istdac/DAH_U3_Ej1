import { StudentService } from './../services/student.service';
import { Component } from '@angular/core';
import { Student } from '../models/student';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //Manejar vista
  /*Import student y servicio
    Como servicio inyectable, se inserta en constructor
    Router es servicio
  */
 //Atributo espejo del arreglo
  public students: Student[];
  constructor(private studentService: StudentService, private alertController: AlertController, private router: Router) {
    //Hacer consulta general
    this.students = this.studentService.getStudents();

  }//constructor

  public async deleteStudent(pos: number){
    const alert = await this.alertController.create({
      header: 'Confirmación',
      subHeader: '¿Está seguro que desea eliminar?',
      message: 'Esto es una confirmación',
      buttons: [ 
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: ()=>{}
        },
        {
          text:'Aceptar',
          role: 'confirm',
          handler: ()=> {
            this.students = this.studentService.deleteStudent(pos);
          }
        }
      ]
    });
    await alert.present();
  }//deleteStudent

  //Metodo espejo de servicio
  public getStudentByControlNumber(cn: string): void{
    //Param es array de ruta
    //Query params se manda en objeto
    this.router.navigate(['/view-student'],
    {
      queryParams: {controlnumber: cn}
    }
    );
  }//getStudentByControlNumber

}//homepage
