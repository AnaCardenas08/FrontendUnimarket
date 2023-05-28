import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDTO } from 'src/app/modelo/producto-dto';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import { ImagenService } from 'src/app/servicios/imagen.service';
import { ProductoService } from 'src/app/servicios/producto.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';



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
  constructor(private route: ActivatedRoute, private productoServicio: ProductoService, private imagenService: ImagenService, private http: HttpClient, private categoriaService: CategoriaService) {
    this.categorias = [];
    this.producto = new ProductoDTO();
    this.codigoProducto= 1;
    this.imagenService = new ImagenService(this.http);
    

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

    if(this.producto.imagenes.length > 0) {
    
    this.productoServicio.crear(this.producto).subscribe({
    next: (data: { respuesta: any; }) => {
    console.log(data.respuesta);
  },
  error: (error: { error: any; }) => {
  console.log(error.error);
  }
  });
  
  } else {
  console.log('Debe seleccionar al menos una imagen y subirla');
  }
  
  }
      

  private cargarCategorias(): void {
    // Realizar una solicitud HTTP para obtener la lista de categorías
    this.categoriaService.listar().subscribe({
      next: (data: { respuesta: string[]; }) => {
        // En caso de éxito, asignar los datos de respuesta al array de categorías
        this.categorias = data.respuesta;
      },
      error: (error: { error: any; }) => {
        // En caso de error, mostrar el error en la consola
        console.log(error.error);
      }
    });
  }
  
  public subirImagenes(): void {
    // Verificar si se han seleccionado archivos
    if (this.archivos != null && this.archivos.length > 0) {
      const objeto = this.producto;
      const formData = new FormData();
      formData.append('file', this.archivos[0]);
  
      // Realizar una solicitud HTTP para subir el archivo al servidor
      this.imagenService.subir(formData).subscribe({
        next: (data: { respuesta: { url: string } }) => {
          // En caso de éxito, agregar la URL de la imagen al array de imágenes del objeto producto
          objeto.imagenes.push(data.respuesta.url);
        },
        error: (error: { error: any }) => {
          // En caso de error, mostrar el error en la consola
          console.log(error.error);
        }
      });
    } else {
      // Mostrar un mensaje de error en caso de que no se hayan seleccionado archivos
      console.log('Debe seleccionar al menos una imagen y subirla');
    }
  }
  
}
