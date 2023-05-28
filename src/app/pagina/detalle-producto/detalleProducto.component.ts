import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarritoService } from 'src/app/servicios/carrito.service';


@Component({
  selector: 'app-detalleproducto',
  templateUrl: './detalleProducto.component.html',
  styleUrls: ['./detalleProducto.component.css']
})
export class DetalleProductoComponent {
  codigoProducto: number = 1;

  /**
   * Constructor del componente DetalleProductoComponent.
   * @param route Objeto ActivatedRoute para obtener los parámetros de la URL.
   * @param carritoService Servicio del carrito para agregar productos.
   */
  constructor(private route: ActivatedRoute, private carritoService: CarritoService) {
    // Suscribirse a los cambios de los parámetros de la ruta
    this.route.params.subscribe(params => {
      // Obtener el código del producto de los parámetros
      this.codigoProducto = params['codigo'];
    });
  }

  /**
   * Método para agregar el producto al carrito.
   * Llama al método agregar() del servicio del carrito y pasa el código del producto.
   */
  public agregarCarrito() {
    this.carritoService.agregar(this.codigoProducto);
  }
}
