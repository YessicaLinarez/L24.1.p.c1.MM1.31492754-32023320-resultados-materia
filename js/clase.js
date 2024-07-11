export default class Cl_Clase{
    constructor(){
        this.contEstudi= 0;
        this.contAprob= 0;
        this.contReprob= 0;
        this.acumNotaFinal= 0;
    }
    procesarEstudiante(es){
        //contamos los estudiantes
        this.contEstudi++;
        //contamos los estudiantes aprobados y reprobados
        if(es.notaFinal >=48){
            this.contAprob++;
        }
        else{
            this.contReprob++;
        }
        //acumulamos las notas finales
        this.acumNotaFinal+=es.notaFinal;
    }
    devolverContAprob(){
        return this.contAprob;
    }
    devolverContReprob(){
        return this.contReprob;
    }
    promedioNota(){
        return this.acumNotaFinal/this.contEstudi;
    }
}