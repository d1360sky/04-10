import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ObtenerPokemonService} from './servicios/obtener-pokemon.service'
@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.page.html',
  styleUrls: ['./pokemones.page.scss'],
})
export class PokemonesPage implements OnInit {

  constructor(
    public obtenerPokemon:ObtenerPokemonService
  ) { }

  ngOnInit() {
    this.obtenerPokemon.obtener20Primeros();
  }

  public cargarMasPokemones(event:Event):void{
    this.obtenerPokemon.obtenerMasPokemones();

  }

}
