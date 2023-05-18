import { Component } from '@angular/core';
import { ProductoDTO } from 'src/app/modelo/producto-dto';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent 
{
  categorias:string[];
  producto:ProductoDTO;
  archivos!:FileList;

  constructor()
  {
    this.categorias = [];
    this.producto = new ProductoDTO();
  }

  ngOnInit(): void 
  {
    this.categorias.push('Tecnología');
    this.categorias.push('Belleza');
    this.categorias.push('Hogar');
    this.categorias.push('Ropa');
    this.categorias.push('Deporte');
    }


    onFileChange(event:any)
    {
      if (event.target.files.length > 0) 
      {
      const files = event.target.files;
      console.log(files);
      }
    }

    public crearProducto()
    {
      if(this.archivos != null && this.archivos.length > 0)
      {
      console.log(this.producto);
      }else
      {
      console.log('Debe seleccionar al menos una imagen');
      }
    }
      


}
