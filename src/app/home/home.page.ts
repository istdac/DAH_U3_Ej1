import { StudentService } from './../services/student.service';
import { Component } from '@angular/core';
import { Student } from '../models/student';
import { AlertController } from '@ionic/angular';
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
  public students: Student[];
  constructor(private studentService: StudentService, private alertController: AlertController) {
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
  }

}//homepage
