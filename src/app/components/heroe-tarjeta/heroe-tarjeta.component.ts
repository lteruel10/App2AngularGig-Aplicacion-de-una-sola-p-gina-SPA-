//input permite recibri datos del padre
//output,EventEmitter emit4en datos al padre

import { Component, OnInit, Input,Output,EventEmitter} from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() heroe:any={};//@Input() significa que los datos pueden venir de afuera
  @Input() idx:number=0;

  @Output() heroeSeleccionado:EventEmitter<number>;

  constructor(
    private _router:Router//el lo puso como 
    ) { 
      this.heroeSeleccionado=new EventEmitter();
    }

  ngOnInit(): void {
  }

  verHeroe(){
    // console.log(this.idx)
    //  this._router.navigate(['/heroe',this.idx])  
    this.heroeSeleccionado.emit(this.idx);

  }//verHeroe

}

              