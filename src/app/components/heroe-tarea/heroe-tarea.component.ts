import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService,Heroe } from '../../services/heroes.services';
import{Router} from '@angular/router';

@Component({
  selector: 'app-heroe-tarea',
  templateUrl: './heroe-tarea.component.html',
  styles: [
  ]
})
export class HeroeTareaComponent implements OnInit {


  heroes:Heroe[]=[];
  constructor(private _heroesService:HeroesService,
              private _router:Router//el lo puso como router:Router
              ) { 
    // console.log("Bob");
  }

  ngOnInit(): void {


  }
  verHeroe(idx:number){
    this._router.navigate(['/heroe',idx])  
    // this.heroes=    this.heroes=this._heroesService.buscarHeroes(params['termino']);

  }//verHeroe


}
