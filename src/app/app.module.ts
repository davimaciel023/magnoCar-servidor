import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componente/cabecalho/cabecalho.component';
import { HomeComponent } from './componente/pages/home/home.component';
import { SobreComponent } from './componente/pages/sobre/sobre.component';
import { ProdutosComponent } from './componente/pages/produtos/produtos.component';
import { ContatoComponent } from './componente/pages/contato/contato.component';
import { RodapeComponent } from './componente/rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    HomeComponent,
    SobreComponent,
    ProdutosComponent,
    ContatoComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
