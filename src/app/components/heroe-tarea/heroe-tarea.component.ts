import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import { HeroesService,Heroe } from '../../services/heroes.services';
import{Router} from '@angular/router';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroe-tarea.component.html',
  styles: [
  ]
})
export class HeroeTareaComponent implements OnInit {

  heroesx:Heroe[]=[];
  constructor(private _heroesService:HeroesService,
              private _router:Router//el lo puso como router:Router
              ) { 
    // console.log("Bob");
    //this.heroesx=this._heroesService.getHeroes();
  }
  ngOnInit(): void {
   this.heroesx=this._heroesService.getHeroes();
   console.log(this.heroesx)

  }
 
}

