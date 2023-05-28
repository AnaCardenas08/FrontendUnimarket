import { Injectable } from '@angular/core';
import { ProductoGetDTO } from '../modelo/producto-get-dto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductoDTO } from '../modelo/producto-dto';
import { MensajeDTO } from '../modelo/mensaje-dto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  productos: ProductoGetDTO[];

  constructor(private http: HttpClient) {
    this.productos = [];

    // Agregar productos al array de productos
    this.productos.push(
      new ProductoGetDTO(
        1,
        "disponible",
        "2023-05-27T10:00:00",
        "Televisor LG 4K",
        "Descripcion 1",
        2,
        3500000,
        1,
        "imagen1",
        "TECNOLOGIA"
      )
    );

    this.productos.push(
      new ProductoGetDTO(
        2,
        "disponible",
        "2023-05-27T10:00:00",
        "Tenis Nike",
        "Descripcion 2",
        4,
        650000,
        1,
        "imagen",
        "DEPORTE"
      )
    );

    this.productos.push(
      new ProductoGetDTO(
        3,
        "disponible",
        "2023-05-27T10:00:00",
        "Vajilla",
        "Descripción 3",
        10,
        1000,
        1,
        "imagen1",
        "PLATOS"
      )
    );

    this.productos.push(
      new ProductoGetDTO(
        4,
        "disponible",
        "2023-05-27T10:00:00",
        "Reloj Inteligente",
        "Descripción 4",
        5,
        2000,
        1,
        "Imagen1",
        "TECNOLOGIA"
      )
    );

    this.productos.push(
      new ProductoGetDTO(
        5,
        "disponible",
        "2023-05-27T10:00:00",
        "Balon de Veleibol",
        "Descripción 5",
        8,
        500,
        1,
        "Imagen1",
        "DEPORTE"
      )
    );

    this.productos.push(
      new ProductoGetDTO(
        6,
        "disponible",
        "2023-05-27T10:00:00",
        "Olla Arrocera",
        "Descripción 6",
        3,
        1500,
        1,
        "Imagen1",
        "ELECTRODOMETICOS"
      )
    );
  }

  /**
   * Método para obtener la lista de productos.
   * @returns Un array de objetos ProductoGetDTO.
   */
  public listar(): ProductoGetDTO[] {
    return this.productos;
  }

  /**
   * Método para obtener un producto por su código.
   * @param codigo El código del producto a buscar.
   * @returns El objeto ProductoGetDTO correspondiente al código proporcionado, o undefined si no se encuentra.
   */
  public obtener(codigo: number): ProductoGetDTO | undefined {
    return this.productos.find(p => p.codigo == codigo);
  }

  public crear(producto: ProductoDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>('https:localhost:8081/api/productos/crearProducto', producto);
  }
  
}
