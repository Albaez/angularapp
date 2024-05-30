import { IImagen } from "./IImagen"

export interface IDescripcion{
    titulo: string
    tipo_pelicula: string
    descripcion : string
    fecha: Date 
    img: IImagen
    enlace: string
    //destacado: boolean
}