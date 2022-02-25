import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiretivaEstruturalRoutingModule } from './diretiva-estrutural-routing.module';
import { DiretivaEstruturalComponent } from './diretiva-estrutural.component';
import { MyCustomForDirective } from 'src/app/directives/diretiva-estrutural/my-custom-for.directive';

@NgModule({
  declarations: [DiretivaEstruturalComponent, MyCustomForDirective],
  imports: [CommonModule, DiretivaEstruturalRoutingModule],
})
export class DiretivaEstruturalModule {}
