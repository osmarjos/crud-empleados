import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Gestion de Usuarios';
  msg='';

  empleados=[
    {name:'Hugo',position:'Programador Jr.',salary:10000,age:15,sex:'M', email:'hugo@disney.com'},
    {name:'Paco',position:'Programador Sr.',salary:15000,age:18,sex:'M', email:'paco@disney.com'},
    {name:'Luis',position:'Administrador Red',salary:40000,age:21,sex:'M', email:'Luis@disney.com'}
  ]

  modelo:any={};
  modelo2:any={};
  index:number=0


  addEmpleado():void{
    //Permite agregar un empleado al arreglo de empleados
    this.empleados.push(this.modelo);
    this.modelo={};
    console.log(this.empleados);
    this.msg='Empleado!';


  } 
  
  deleteEmpleado(i:number):void{
    //Permite eliminar un empleado del arreglo de empleados
    this.empleados.splice(i,1);
  }
  myValue:number=0;
  editEmpleado(i:number):void{
    //Permite seleccionar un empleado del arreglo de empleados para su actualización
    this.modelo2.name= this.empleados[i].name;
    this.modelo2.position= this.empleados;
    this.modelo2.salary= this.empleados[i].salary;
    this.modelo2.sex= this.empleados[i].sex;
    this.modelo2.email= this.empleados[i].email;
    this.myValue=i;


  }

  updateEmpleado():void{
    //Permite actualizar un empleado en el arreglo de empleados
    let i=this.myValue;
    this.empleados[i]=this.modelo2;
    this.modelo2();
    //this.[i]=this.modelo2;

  }



}
