export class Student {
    controlNumber: string; //Llave primaria // Si se usa un ? al final del nombre, significa que es opcional
    name: string;
    curp: string;
    age: number;
    nip: number;
    email: string;
    career: string;
    photo?: string;
}
