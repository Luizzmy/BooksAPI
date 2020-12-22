import { IsNotEmpty, IsNumber, IsPositive, IsString, Max, Min } from "class-validator"


export class CrearLibroDTO {

    @IsString()
    @IsNotEmpty()
    nombre:string

    @IsString()
    @IsNotEmpty()
    autor:string

    @IsNumber()
    @IsPositive()
    @Min(1)
    @Max(1200)
    @IsNotEmpty()
    pags:number
}