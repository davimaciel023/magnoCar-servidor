import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabecalhoComponent } from './componente/cabecalho/cabecalho.component';
import { RodapeComponent } from './componente/rodape/rodape.component';
import { HomeComponent } from './componente/pages/home/home.component';
import { SobreComponent } from './componente/pages/sobre/sobre.component';
import { ProdutosComponent } from './componente/pages/produtos/produtos.component';
import { ContatoComponent } from './componente/pages/contato/contato.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cabecalho',
    component: CabecalhoComponent
  },
  {
    path: 'rodape',
    component: RodapeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'sobre',
    component: SobreComponent
  },
  {
    path: 'produtos',
    component: ProdutosComponent
  },
  {
    path: 'contato',
    component: ContatoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
