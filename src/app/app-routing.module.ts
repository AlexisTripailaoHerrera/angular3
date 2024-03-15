import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './components/listar/listar.component';
import { ListarTramitesComponent } from './components/listar-tramites/listar-tramites.component';

const routes: Routes = [
  {path: '', component: ListarComponent},
  {path: 'ListarTramites', component: ListarTramitesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
