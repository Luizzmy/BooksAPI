import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import {LibrosService} from './libros.service'
import {CrearLibroDTO} from './dto/crearLibro.dto'
import {Libro} from './interfaces/libros.interface'


@Controller('libros')
export class LibrosController {

    constructor(private librosService: LibrosService){

    }
    @Get()
    buscarLibros(): Libro[]{
        return this.librosService.listarTodo()
    }

    //Los parametros tienen dos maneras de especificarse, esta es la primera
    //La desventaja es que si se define de esta manera no se puede definir el tipo de dato para la trasnferencia
    // @Get(':id')
    // infoLibro(@Param() params):string{
    //     return `esta es la info del libro #${params.id}`
    // }

    //Esta es la segunda manera de especificarse
    @Get(':id')
    infoLibro(@Param('id') id:number):Libro{
        return this.librosService.infoLibro(id)
    }

    @Post()
    crearLibro(@Body() infoLibro:CrearLibroDTO) {
        //En post no hace falta definir nada despues de los argumentos de crearLibro ya que non se devuelve nada, sino que se envia informacion internamente
        console.log(infoLibro)
      return this.librosService.crearLibro(infoLibro);
    }

    @Put(':id')
    editarLibro(@Param('id') id:number, @Body() actualizarLibro: Libro){
        return this.librosService.editarLibro(id, actualizarLibro)
    }

    @Delete(':id')
    borrarLibro(@Param('id') id:number){
        return this.librosService.eliminarLibro(id)
    }
}
