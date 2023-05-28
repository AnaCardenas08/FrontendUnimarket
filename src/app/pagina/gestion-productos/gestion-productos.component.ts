import { Component, OnInit } from '@angular/core';
import { ProductoGetDTO } from 'src/app/modelo/producto-get-dto';
import { ProductoService } from 'src/app/servicios/producto.service';

/**
 * Componente para gestionar productos.
 */
@Component({
  selector: 'app-gestion-productos',
  templateUrl: './gestion-productos.component.html',
  styleUrls: ['./gestion-productos.component.css']
})
export class GestionProductosComponent implements OnInit {
  productos: ProductoGetDTO[]; // Array de productos
  seleccionados: ProductoGetDTO[]; // Array de productos seleccionados
  textoBtnEliminar: string; // Texto para el botón de eliminación

  /**
   * Constructor de la clase GestionProductosComponent.
   * @param productoServicio Servicio para obtener los productos
   */
  constructor(private productoServicio: ProductoService) {
    this.productos = [];
    this.seleccionados = [];
    this.textoBtnEliminar = '';
  }

  /**
   * Método que se ejecuta al inicializar el componente.
   * Obtiene la lista de productos del servicio.
   */
  ngOnInit(): void {
    this.productos = this.productoServicio.listar();
  }

  /**
   * Método para seleccionar un producto y actualizar la lista de productos seleccionados.
   * @param producto Producto a seleccionar o deseleccionar
   * @param estado Estado de la selección (true para seleccionar, false para deseleccionar)
   */
  public seleccionar(producto: ProductoGetDTO, estado: boolean) {
    if (estado) {
      this.seleccionados.push(producto); // Agregar el producto a la lista de seleccionados
    } else {
      this.seleccionados = this.seleccionados.filter(i => i !== producto); // Eliminar el producto de la lista de seleccionados
    }

    this.actualizarMensaje(); // Actualizar el texto del botón de eliminación
  }

  /**
   * Método para actualizar el texto del botón de eliminación según la cantidad de productos seleccionados.
   */
  private actualizarMensaje() {
    const tam = this.seleccionados.length; // Obtener la cantidad de productos seleccionados

    if (tam !== 0) {
      if (tam === 1) {
        this.textoBtnEliminar = "1 elemento"; // Texto para un elemento seleccionado
      } else {
        this.textoBtnEliminar = tam + " elementos"; // Texto para más de un elemento seleccionado
      }
    } else {
      this.textoBtnEliminar = ""; // No hay elementos seleccionados, texto vacío
    }
  }
 /**
 * Método para borrar los productos seleccionados.
 * Elimina los productos seleccionados del array de productos y luego actualiza el array de seleccionados y el texto del botón de eliminación.
 */
public borrarProductos() {
  // Recorre cada producto seleccionado
  this.seleccionados.forEach(e => {
    // Filtra los productos para eliminar el producto actual (e) del array de productos
    this.productos = this.productos.filter(i => i !== e);
  });

  this.seleccionados = []; // Limpia el array de seleccionados, ya que los productos han sido eliminados
  this.actualizarMensaje(); // Actualiza el texto del botón de eliminación
}
}


 
  
  
