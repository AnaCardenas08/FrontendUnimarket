import { Component } from '@angular/core';
import { DetalleCompraDTO } from 'src/app/modelo/detalleCompra-dto';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { ProductoService } from 'src/app/servicios/producto.service';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  productos: DetalleCompraDTO[]; // Arreglo de productos en el carrito
  valorTotal: number; // Valor total de los productos en el carrito

  constructor(private carritoService: CarritoService, private productoService: ProductoService) {
    this.productos = [];
    this.valorTotal = 0;

    const listaCodigos = this.carritoService.listar(); // Obtener la lista de códigos de productos en el carrito

    if (listaCodigos.length > 0) {
      // Si hay códigos en el carrito, realizar lo siguiente para cada código
      for (let cod of listaCodigos) {
        const producto = this.productoService.obtener(cod); // Obtener el producto correspondiente al código

        if (producto != null) {
          // Si el producto existe, agregar un nuevo detalle de compra al carrito
          this.productos.push(new DetalleCompraDTO());
          this.valorTotal += producto.precio; // Actualizar el valor total sumando el precio del producto
        }
      }
    }
  }
}

