import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoGetDTO } from 'src/app/modelo/producto-get-dto';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  textoBusqueda: string; // Texto de búsqueda ingresado por el usuario
  productos: ProductoGetDTO[]; // Array de todos los productos
  filtro: ProductoGetDTO[]; // Array filtrado de productos basado en el texto de búsqueda

  /**
   * Constructor de la clase BusquedaComponent.
   * @param route Módulo ActivatedRoute para acceder a la información de la ruta
   * @param productoServicio Servicio para obtener los productos
   */
  constructor(private route: ActivatedRoute, private productoServicio: ProductoService) {
    this.textoBusqueda = "";
    this.productos = this.productoServicio.listar();
    this.filtro = [];

    // Suscribirse a los cambios de los parámetros de la ruta
    this.route.params.subscribe(params => {
      this.textoBusqueda = params["texto"]; // Obtener el texto de búsqueda de los parámetros
      // Filtrar los productos por el texto de búsqueda (ignorando mayúsculas y minúsculas)
      this.filtro = this.productos.filter(p =>
        p.nombre.toLowerCase().includes(this.textoBusqueda.toLowerCase())
      );
    });
  }
}
