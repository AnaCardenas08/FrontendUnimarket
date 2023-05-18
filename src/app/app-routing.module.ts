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
{ path: "", component: InicioComponent },
{ path: "login", component: LoginComponent },
{ path: "registro", component: RegistroComponent },
{ path: "busqueda", component: BusquedaComponent },
{ path: "carrito", component: CarritoComponent },
{ path: "compra", component: CompraComponent },
{ path: "crearProduct", component: CrearProductoComponent},
{ path: "descripcionProducto", component: DescripcionProductoComponent },
{ path: "detalleCompra", component: DetalleCompraComponent },
{ path: "editarProducto", component: EditarProductoComponent },
{ path: "favoritos", component: FavoritosComponent },
{ path: "foro", component: ForoComponent },
{ path: "listarProducto", component: ListarProductoComponent },
{ path: "opcionesUsuario", component: OpcionesUsuarioComponent },
{ path: "paginaPrincipal", component: PaginaPrincipalComponent },
{ path: "vistaModerador", component: VistaModeradorComponent },
{ path: "**", pathMatch: "full", redirectTo: "" }

];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }