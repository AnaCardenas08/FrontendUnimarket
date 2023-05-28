import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDTO } from 'src/app/modelo/producto-dto';
import { ProductoService } from 'src/app/servicios/producto.service';


@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent {
  categorias: string[]; // Array de categorías
  producto: ProductoDTO; // Objeto ProductoDTO para crear un producto
  archivos!: FileList; // Lista de archivos seleccionados
  esEdicion: boolean = false; // Indicador de si es edición o creación (valor inicial: false)
  codigoProducto: number; // Código del producto obtenido de la ruta

  /**
   * Constructor de la clase CrearProductoComponent.
   * @param route Módulo ActivatedRoute para acceder a la información de la ruta
   */
  constructor(private route: ActivatedRoute, private productoServicio: ProductoService) {
    this.categorias = [];
    this.producto = new ProductoDTO();
    this.codigoProducto= 1;

    // Suscribirse a los cambios de los parámetros de la ruta
    this.route.params.subscribe(params => {
      this.codigoProducto = params["codigo"]; // Obtener el código del producto de los parámetros
      let objetoProducto = this.productoServicio.obtener(this.codigoProducto); // Obtener el producto del servicio

      // Verificar si se encontró un producto con el código
      if (objetoProducto != null) {
        this.producto = objetoProducto;
        this.esEdicion = true; // Establecer el indicador de edición a true
      }
    });
  }

  /**
   * Método que se ejecuta al inicializar el componente.
   * Agrega las categorías disponibles y accede al código del producto que viene por la URL.
   */
  ngOnInit(): void {
    this.categorias.push('Tecnología');
    this.categorias.push('Belleza');
    this.categorias.push('Hogar');
    this.categorias.push('Ropa');
    this.categorias.push('Deporte');

    // Acceder al código del producto que viene por la URL
    const codigoProducto = this.route.snapshot.paramMap.get('codigo');
    if (codigoProducto) {
      console.log('Código del producto:', codigoProducto);
      this.esEdicion = true; // Si hay un código de producto, significa que es edición (true)
    }
  }

  /**
   * Método que se ejecuta al cambiar la selección de archivos.
   * @param event Evento del cambio de archivos
   */
  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const files = event.target.files;
      console.log(files);
    }
  }

  /**
   * Método para crear un producto.
   * Verifica si se han seleccionado archivos y muestra el objeto del producto en la consola.
   */
  public crearProducto() {
    if (this.archivos != null && this.archivos.length > 0) {
      console.log(this.producto);
    } else {
      console.log('Debe seleccionar al menos una imagen');
    }
  }
}
