import { Injectable } from '@angular/core';
import { Student } from '../models/student';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  //Construir lo de la consulta general
  /*Hacer import de student */
  private students: Student[]=[];

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
        nip: 717,
        photo : '../../assets/img/cat.jpg'
      },
      {
        controlNumber: '12404391',
        age:25,
        career: 'IGE',
        curp: 'AVTIQ40917HNTRZS09',
        email: 'iarjona2@ittepic.edu.mx',
        name: 'Israel Arjona Vizcaídos',
        nip: 616,
        photo : '../../assets/img/yankee.png'

      },
      {
        controlNumber: '32405891',
        age:18,
        career: 'IEL',
        curp: 'AOVIT40917HNTRZS09',
        email: 'iarjona3@ittepic.edu.mx',
        name: 'Israel Arjona Vizcaítres',
        nip: 327,
        photo : '../../assets/img/face.png'
      }
    ];
   }
   //Método consulta general
  public getStudents(): Student[]{
    return this.students;
  }
  public deleteStudent(pos: number): Student[]{
    this.students.splice(pos,1);
    return this.students;
  }
  //Obtener alumno por NC
  public getStudentByControlNumber(cn: string): Student{
    let item: Student;
    item = this.students.find(
      (student)=> student.controlNumber === cn//funAnonima
    );
    return item;
  }//getStudentByControlNumber

  public newStudent(student: Student): void{
    this.students.push(student); //Solamente usar cuando arreglo ya inicializado (en constructor)
  }
  public updateStudent(cn: string,ag: number,ca: string,cu: string,em: string,na: string,ni: number,ph: string){
    let update =  this.students.findIndex(
      (student)=> student.controlNumber === cn//funAnonima
    );

    this.students[update].age=ag;
    this.students[update].career=ca;
    this.students[update].curp=cu;
    this.students[update].email=em;
    this.students[update].name=na;
    this.students[update].photo=ph;
    this.students[update].nip=ni;
  }
}
