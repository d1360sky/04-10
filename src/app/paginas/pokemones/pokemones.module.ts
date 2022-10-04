import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {ReactiveFormsModule} from '@angular/forms'
//Navegacion
import {RouterModule} from '@angular/router'
import { PokemonesPageRoutingModule } from './pokemones-routing.module';
//Hacer peticiones a internet
import {HttpClientModule} from '@angular/common/http'
import { PokemonesPage } from './pokemones.page';
import {InfoPokemonComponent} from './componentes/info-pokemon/info-pokemon.component'

import {ObtenerPokemonService} from './servicios/obtener-pokemon.service';

@NgModule({ //modulos
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonesPageRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [PokemonesPage, InfoPokemonComponent], //componentes
  providers: [ObtenerPokemonService] //servicios y directivas
})
export class PokemonesPageModule {}
