import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ResultadoPeticion, Info } from 'src/app/modelo/resultado-peticion';

@Injectable()
export class ObtenerPokemonService {

  private url:string = 'https://pokeapi.co/api/v2/pokemon'
  public resultado!: ResultadoPeticion;
  public informaciones:Array<Info> =[];
  constructor(
    private client:HttpClient
  ) { }

  public obtener20Primeros(){
    this.client.get<ResultadoPeticion>(this.url).subscribe(peticion => {
      this.resultado = peticion
      this.informaciones.push(...peticion.results); //destructurar ... "tres puntos"
    });
  }

  public obtenerMasPokemones(){
    this.client.get<ResultadoPeticion>(this.resultado.next).subscribe(peticion => {
      this.resultado = peticion;
      this.informaciones.push(...peticion.results); //destructurar ... "tres puntos"
    });
  }
}
