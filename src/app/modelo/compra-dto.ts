import { ProductoGetDTO } from "./producto-get-dto";

/**
 * Clase que representa los datos de una compra.
 * Diego Alejandro Lopez 
 */
export class CompraDTO {
  codigoUsuario: number = 1; // Código del usuario asociado a la compra. Por defecto: 1
  metodoPago: string = ""; // Método de pago utilizado en la compra. Por defecto: ""
  totalPago: number = 12500; // Total del pago realizado en la compra. Por defecto: 12500
  unidades: number = 1; // Cantidad de unidades del producto compradas. Por defecto: 1
  producto: ProductoGetDTO = new ProductoGetDTO(
    1,
    "disponible",
    "2023-05-27T10:00:00",
    "Nombre del producto",
    "Descripción del producto",
    1,
    100,
    1,
    "ruta-de-imagen",
    "Categoría del producto"
  ); 
}

