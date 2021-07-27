import { Component } from '@angular/core';
//se quito el ngOnInit solo para probar que fununcia sin el 
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.services';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent  {

  heroe:any={};

  constructor(private _activatedRoute:ActivatedRoute,
              private _heroesService:HeroesService
     ) { 
    this._activatedRoute.params.subscribe(params=>{
      this.heroe=this._heroesService.getHeroe(params['id']);
      // console.log(params['id']);//ese id viene de (rutas) { path: 'heroe/:id', component: HeroeComponent },

    })//params =>

  }

  

}
