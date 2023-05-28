export class ProductoDTO 
{
    nombre:string = "";
    descripcion:string = "";
    unidades:number = 20;
    precio:number = 15500;
    codigoUsuario:number = 1;
    categoria:string = "";
    disponibilidad:string = "";
    imagenes: string[];

    constructor() {
        this.nombre = "";
        this.descripcion = "";
        this.unidades = 20;
        this.precio = 15500;
        this.codigoUsuario = 1;
        this.categoria = "";
        this.disponibilidad = "";
        this.imagenes = []; 
      }
    
}