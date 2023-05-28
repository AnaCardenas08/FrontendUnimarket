import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { BusquedaComponent } from './pagina/busqueda/busqueda.component';
import { CarritoComponent } from './pagina/carrito/carrito.component';
import { CompraComponent } from './pagina/compra/compra.component';
import { DescripcionProductoComponent } from './pagina/descripcionProducto/descripcionProducto.component';
import { DetalleCompraComponent } from './pagina/detalleCompra/detalleCompra.component';
import { EditarProductoComponent } from './pagina/editarProducto/editarProducto.component';
import { FavoritosComponent } from './pagina/favoritos/favoritos.component';
import { ForoComponent } from './pagina/foro/foro.component';
import { ListarProductoComponent } from './pagina/listarProducto/listarProducto.component';
import { OpcionesUsuarioComponent } from './pagina/opcionesUsuario/opcionesUsuario.component';
import { PaginaPrincipalComponent } from './pagina/paginaPrincipal/paginaPrincipal.component';
import { VistaModeradorComponent } from './pagina/vistaModerador/vistaModerador.component';
import { CrearProductoComponent } from './pagina/crear-producto/crear-producto.component';

const routes: Routes = [
  { path: "", component: InicioComponent }, // Ruta principal que carga el componente InicioComponent
  { path: "login", component: LoginComponent }, // Ruta para el componente LoginComponent
  { path: "registro", component: RegistroComponent }, // Ruta para el componente RegistroComponent
  { path: "busqueda", component: BusquedaComponent }, // Ruta para el componente BusquedaComponent
  { path: "carrito", component: CarritoComponent }, // Ruta para el componente CarritoComponent
  { path: "compra", component: CompraComponent }, // Ruta para el componente CompraComponent
  { path: "crearProduct", component: CrearProductoComponent }, // Ruta para el componente CrearProductoComponent
  { path: "descripcionProducto", component: DescripcionProductoComponent }, // Ruta para el componente DescripcionProductoComponent
  { path: "detalleCompra", component: DetalleCompraComponent }, // Ruta para el componente DetalleCompraComponent
  { path: "editarProducto", component: EditarProductoComponent }, // Ruta para el componente EditarProductoComponent
  { path: "favoritos", component: FavoritosComponent }, // Ruta para el componente FavoritosComponent
  { path: "foro", component: ForoComponent }, // Ruta para el componente ForoComponent
  { path: "listarProducto", component: ListarProductoComponent }, // Ruta para el componente ListarProductoComponent
  { path: "opcionesUsuario", component: OpcionesUsuarioComponent }, // Ruta para el componente OpcionesUsuarioComponent
  { path: "paginaPrincipal", component: PaginaPrincipalComponent }, // Ruta para el componente PaginaPrincipalComponent
  { path: "vistaModerador", component: VistaModeradorComponent }, // Ruta para el componente VistaModeradorComponent
  { path: "**", pathMatch: "full", redirectTo: "" }, // Ruta por defecto que redirige a la ruta principal
  { path: "busqueda/:texto", component: BusquedaComponent }, // Ruta para el componente BusquedaComponent con un parámetro de texto
  { path: "editar-producto/:codigo", component: CrearProductoComponent } // Ruta para el componente CrearProductoComponent con un parámetro de código
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Importa las rutas y las configura en el módulo principal
  exports: [RouterModule] // Exporta el módulo de rutas para que esté disponible en otros módulos
})
export class AppRoutingModule { }
