# Spa
## Problemas resueltos
### Entendiendo params
ngOnInit():
etro despues de la raiz  esto de termino viene desde aqui:  
    { path: 'buscar/:termino', component: BuscadorComponent },
que esta en las rutas, omitiara buscar/ y tomara el termino.... raro... para los que venimos de structurada jejejje

### 1.. no funcionaba keyUp(enter) L62-66
__Solucion 
en el archivo app.modules importar: import { FormsModule } from '@angular/forms';
imports: [
    BrowserModule,
    FormsModule,<--
    APP_ROUTING
  ],


