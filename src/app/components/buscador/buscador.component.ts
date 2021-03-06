import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import { HeroesService,Heroe } from '../../services/heroes.services';
import{Router} from '@angular/router';
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
  ]
})
export class BuscadorComponent implements OnInit {

  heroes:any[]=[];
  termino:string='';
  constructor(private _activatedRoute:ActivatedRoute, 
              private _heroesService:HeroesService,
              private _router:Router) {

   }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params=>{
     this.termino=params['termino'];
      // console.log(params['termino']);
    this.heroes=this._heroesService.buscarHeroes(params['termino']);
      console.log(this.heroes);
    });
  }
  verHeroe(idx:number){
    this._router.navigate(['/heroe',idx])  
  }//verHeroe

}
