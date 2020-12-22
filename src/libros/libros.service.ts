import { Injectable } from '@nestjs/common';
import {Libro} from './interfaces/libros.interface'

@Injectable()
export class LibrosService {
    //Aqui es donde se deberia conectar a la base de datos

    //En este ejemplo solo se simulara un array para guardar los elementos creados

    private readonly libros : Libro[]=[]

    private findId(id:number):number{
        let indice:number
        this.libros.forEach(function(libro:Libro, index:number){
            if(libro.libro_id==id){
                indice=index
            }
        })

        return indice
    }

    //Crear libro
    crearLibro(infoLibro){
        //Crear funcion para agregar id (no seria necesario de tener BD)
        let lastId: number

        function addId(matrixLibros):number{
            
        if(matrixLibros.length>0){
            lastId =matrixLibros[matrixLibros.length-1].libro_id+1
            return lastId
        } else {
            return lastId=1
        }
        }

        //Funcion push para el array

        const nuevoLibro={
            libro_id:addId(this.libros),
            ...infoLibro
        }

        this.libros.push(nuevoLibro)
    }

    //Editar libro
    editarLibro(id:number, infoLibro){
        const indice=this.findId(id)
        this.libros.splice(indice, 1, infoLibro)
    }

    //Listar libros
    listarTodo(){
        return this.libros
    }

    //Mostrar un libro
    infoLibro(id:number):Libro{
        return this.libros[this.findId(id)]
    }

    //Eliminar un libro
    eliminarLibro(id:number){
        const indice=this.findId(id)
        this.libros.splice(indice, 1) 

    }
}
