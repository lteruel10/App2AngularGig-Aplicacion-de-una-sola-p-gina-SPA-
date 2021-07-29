import { Component, OnInit } from '@angular/core';
import { HeroesService,Heroe} from '../../../services/heroes.services';
import{Router} from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  heroes:Heroe[]=[];

  // constructor(private _heroesService:HeroesService,private _router:Router)
    constructor(
      private _router:Router)
    { }

  ngOnInit(): void {
   
  }
  
  buscarHeroe(termino:string){
    this._router.navigate(['/buscar',termino]);
    console.log(termino)
  }

}
