import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  constructor(private router: Router) {
    // Inyecta el servicio Router en el constructor del componente
  }

  public iraBusqueda(valor: string) {
    if (valor) {
      this.router.navigate(['/busqueda', valor]);
      // Navega a la ruta '/busqueda' con el valor proporcionado como parámetro
    }
  }
}
