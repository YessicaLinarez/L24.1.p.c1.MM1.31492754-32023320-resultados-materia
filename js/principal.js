/*Sea la información de varios estudiantes: cédula y nota final.
Se sabe que los estudiantes aprueban con 48Ptos.
Se desea procesar a varios estudiantes y determinar 
la siguiente estadística: cantidad de
aprobados, cantidad de reprobados y nota promedio de la sección.
Siendo los resultados de un salón de clases los siguientes: 
cédula(puntos); 888 (60Ptos), 777 (50Ptos), 999 (40Ptos), 
333 (80Ptos), 111 (30Ptos), 333 (90Ptos), 444 (48Ptos) y
222 (60Ptos) */

import Cl_Clase from "./clase.js";
import Cl_Estudiante from "./estudiante.js";

let estudiante1=new Cl_Estudiante(888,60);
let estudiante2=new Cl_Estudiante(777,50);
let estudiante3=new Cl_Estudiante(999,40);
let estudiante4=new Cl_Estudiante(333,80);
let estudiante5=new Cl_Estudiante(111,30);
let estudiante6=new Cl_Estudiante(333,90);
let estudiante7=new Cl_Estudiante(444,48);
let estudiante8=new Cl_Estudiante(222,60);

let clase=new Cl_Clase()
clase.procesarEstudiante(estudiante1);
clase.procesarEstudiante(estudiante2);
clase.procesarEstudiante(estudiante3);
clase.procesarEstudiante(estudiante4);
clase.procesarEstudiante(estudiante5);
clase.procesarEstudiante(estudiante6);
clase.procesarEstudiante(estudiante7);
clase.procesarEstudiante(estudiante8);

let salida = document.getElementById("salida")
salida.innerHTML+= "Cantidad de aprobados: " +clase.devolverContAprob();
salida.innerHTML+= "<br> Cantidad de reprobados: " +clase.devolverContReprob();
salida.innerHTML+= "<br> Nota promedio de la sección: " +clase.promedioNota();
