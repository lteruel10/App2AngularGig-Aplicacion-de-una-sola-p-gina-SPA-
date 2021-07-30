### codigo viejo buscar
<h1 class="animated fadeIn ">buscando a: <small>{{termino}}</small></h1>
<hr>

<div class="row">
    <div class="col-md-12">
        <div class="alert alert-info animated fadeIn" role="alert" *ngIf="heroes.length==0">
            No esisten resultados asociados a su busqueda: {{termino}}
        </div>
    </div>
</div>

<div class="row">

    <div class="col-md-4 animated fadeIn" *ngFor="let heroe of heroes; let i=index">
        <img class="card-img-top img-fluid" [src]="heroe.img" [alt]="heroe.casa">
        <div class="card-block">
            <h5 class="card-title">{{heroe.nombre}}</h5>
            <p class="card-text">{{heroe.bio}}</p>
            <p class="card-text"><small class="text-muted">{{(heroe.aparicion)}}</small></p>
            <!-- <button type="button" class="btn btn-outline-primary w-100">Ver más...</button> -->
            <!-- ponemos una / ant4es de heroe asi /heroe para que heroe sea la raiz -->
            <!-- <a [routerLink]="['/heroe',i]" class="btn btn-outline-primary">ver más</a> -->
            <button (click)="verHeroe(i)" type="button" class="btn btn-outline-primary w-100">Ver más...
            </button>

        </div>
    </div>
</div>