import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule // Importa el módulo RouterTestingModule para realizar pruebas de enrutamiento
      ],
      declarations: [
        AppComponent // Declara el componente AppComponent para las pruebas
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent); // Crea una instancia del componente AppComponent
    const app = fixture.componentInstance; // Obtiene la instancia del componente
    expect(app).toBeTruthy(); // Verifica que el componente se haya creado exitosamente
  });

  it(`should have as title 'my-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent); // Crea una instancia del componente AppComponent
    const app = fixture.componentInstance; // Obtiene la instancia del componente
    expect(app.title).toEqual('my-app'); // Verifica que la propiedad 'title' del componente tenga el valor 'my-app'
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent); // Crea una instancia del componente AppComponent
    fixture.detectChanges(); // Detecta los cambios en el componente
    const compiled = fixture.nativeElement as HTMLElement; // Obtiene el elemento HTML del componente
    expect(compiled.querySelector('.content span')?.textContent).toContain('my-app app is running!'); // Verifica que el elemento HTML contenga el texto 'my-app app is running!'
  });
});
