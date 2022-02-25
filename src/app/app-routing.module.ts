import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'diretiva-estrutural',
    loadChildren: () =>
      import('./pages/diretiva-estrutural/diretiva-estrutural.module').then(
        (m) => m.DiretivaEstruturalModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
