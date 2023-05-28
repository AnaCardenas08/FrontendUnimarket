export class ProductoGetDTO 
{
    codigo: number = 1;
    disponibilidad: string = "";
    localdatetime: string = "";
    nombre: string = "";
    descripcion: string = "";
    unidades: number = 20;
    precio: number = 15500;
    codigoUsuario: number = 1;
    imagenes: string[];
    categoria: string = "";
  
    constructor(
      codigo: number,
      disponibilidad: string,
      localdatetime: string,
      nombre: string,
      descripcion: string,
      unidades: number,
      precio: number,
      codigoUsuario: number,
      imagenes: string,
      categoria: string
    ) 
    {
      this.codigo = codigo;
      this.disponibilidad = disponibilidad;
      this.localdatetime = localdatetime;
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.unidades = unidades;
      this.precio = precio;
      this.codigoUsuario = codigoUsuario;
      this.imagenes = []; 
      this.categoria = categoria;
    }
  }
  