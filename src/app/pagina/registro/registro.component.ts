import { Component } from '@angular/core';
import { UsuarioDTO } from 'src/app/modelo/usuario-dto';
import { AuthService } from 'src/app/servicios/auth.service';
import { Alerta } from 'src/app/modelo/alerta';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  usuario: UsuarioDTO; // Objeto UsuarioDTO para almacenar los datos del usuario
  alerta!:Alerta;


  /**
   * Constructor de la clase RegistroComponent.
   * Se inicializa el objeto usuario.
   */
  constructor(private authService:AuthService) {
    this.usuario = new UsuarioDTO();
  }

  /**
   * Método para registrar el usuario.
   * Muestra el objeto usuario en la consola.
   */
  public registrar(){

    const objeto = this;
    
    this.authService.registrar(this.usuario).subscribe({
    next: data => {
    objeto.alerta = new Alerta(data.respuesta, "success");
    },
    error: error => {
    objeto.alerta = new Alerta(error.error.respuesta, "danger");
    }
    });
    
    }
    
    
  /**
   * Método para verificar si las contraseñas coinciden.
   * @returns true si las contraseñas coinciden, false en caso contrario
   */
  public sonIguales(): boolean {
    return this.usuario.password == this.usuario.confirmarPass;
  }
}
