import { Component, OnInit, ViewChild } from '@angular/core';
import {ObtenerPokemonService} from './servicios/obtener-pokemon.service';
import { IonInfiniteScroll } from '@ionic/angular';
import {FormBuilder, FormControl, FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.page.html',
  styleUrls: ['./pokemones.page.scss'],
})
export class PokemonesPage implements OnInit {
  @ViewChild(IonInfiniteScroll) public miInfinito: IonInfiniteScroll; // llamar a un elemento HTML y guardarlo en una variable
  public formulario:FormGroup;
  constructor(
    public obtenerPokemon:ObtenerPokemonService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      //primer parametro: El valor del value
      //segundo parametro: validaciones sync / validaciones custom
      //tercer parametro: validaciones async (desde internet)
      nombrePokemon:new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15)
      ])
    });

    this.obtenerPokemon.obtener20Primeros();
  }

  public cargarMasPokemones(event:Event):void{
    this.obtenerPokemon.obtenerMasPokemones();
    this.miInfinito.complete();
  }

}
