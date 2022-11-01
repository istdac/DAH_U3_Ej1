import { Injectable } from '@angular/core';
import { Student } from '../models/student';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  //Construir lo de la consulta general
  /*Hacer import de student */
  private students: Student[];

  constructor() {
    //Llenar algunos datos por defecto
    this.students = [
      {
        controlNumber: '02400391',
        age:38,
        career: 'ISC',
        curp: 'AOVI840917HNTRZS09',
        email: 'iarjona@ittepic.edu.mx',
        name: 'Israel Arjona Vizcaíno',
        nip: 717
      },
      {
        controlNumber: '12404391',
        age:25,
        career: 'IGE',
        curp: 'AVTIQ40917HNTRZS09',
        email: 'iarjona2@ittepic.edu.mx',
        name: 'Israel Arjona Vizcaídos',
        nip: 616
      },
      {
        controlNumber: '32405891',
        age:18,
        career: 'IEL',
        curp: 'AOVIT40917HNTRZS09',
        email: 'iarjona3@ittepic.edu.mx',
        name: 'Israel Arjona Vizcaítres',
        nip: 327
      }
    ];
   }
}
