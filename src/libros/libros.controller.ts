import { Controller, Get, Param } from '@nestjs/common';

@Controller('libros')
export class LibrosController {
    @Get()
    buscarLibros():string{
        return 'Aqui se listaran todos los libros'
    }

    @Get(':id')
    infoLibro(@Param() params):string{
        console.log(params)
        return `esta es la info del libro #${params.id}`
    }
}
