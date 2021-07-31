# Spa
## Problemas resueltos
### <!-- version previa antes de trabajar con herencia padre e hijo.... crear coomponente especializado heroe-tarjeta -->
<div class="row">
    <div class="col-md-4" *ngFor="let heroe of heroes; let i=index">
        <img class="card-img-top img-fluid" [src]="heroe.img" [alt]="heroe.casa">
        <div class="card-block">
            <h5 class="card-title">{{heroe.nombre}}</h5>
            <p class="card-text">{{heroe.bio}}</p>
            <p class="card-text"><small class="text-muted">{{(heroe.aparicion)}}</small></p>
            <button type="button" class="btn btn-outline-primary w-100">Ver más...</button>
            <!-- ponemos una / ant4es de heroe asi /heroe para que heroe sea la raiz -->
            <a [routerLink]="['/heroe',i]" class="btn btn-outline-primary">ver más</a>
            <button (click)="verHeroe(i)" type="button" class="btn btn-outline-primary w-100">Ver más...
            </button>

        </div>
    </div>
</div>>

### 2 para crtear solo el ts y html 
ng g c components/heroeTarjeta --skip-tests
### 2 Entendiendo params
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


