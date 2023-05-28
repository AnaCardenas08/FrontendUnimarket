import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  productos: number[];

  constructor() {
    this.productos = [];
  }

  /**
   * Agrega un código de producto al carrito.
   * @param codigo El código del producto a agregar.
   */
  public agregar(codigo: number): void {
    this.productos.push(codigo);
  }

  /**
   * Quita un código de producto del carrito.
   * @param codigo El código del producto a quitar.
   */
  public quitar(codigo: number): void {
    let indice = this.productos.indexOf(codigo);
    this.productos.splice(indice, 1);
  }

  /**
   * Obtiene la lista de códigos de productos en el carrito.
   * @returns Un array con los códigos de productos en el carrito.
   */
  public listar(): number[] {
    return this.productos;
  }
}

