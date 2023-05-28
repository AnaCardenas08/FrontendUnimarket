import { Component } from '@angular/core';
import { UsuarioDTO } from 'src/app/modelo/usuario-dto';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  usuario: UsuarioDTO; // Objeto UsuarioDTO para almacenar los datos del usuario

  /**
   * Constructor de la clase RegistroComponent.
   * Se inicializa el objeto usuario.
   */
  constructor() {
    this.usuario = new UsuarioDTO();
  }

  /**
   * Método para registrar el usuario.
   * Muestra el objeto usuario en la consola.
   */
  public registrar() {
    console.log(this.usuario);
    // Puedes agregar aquí la lógica para enviar los datos del usuario al servidor
  }

  /**
   * Método para verificar si las contraseñas coinciden.
   * @returns true si las contraseñas coinciden, false en caso contrario
   */
  public sonIguales(): boolean {
    return this.usuario.password == this.usuario.confirmarPass;
  }
}
