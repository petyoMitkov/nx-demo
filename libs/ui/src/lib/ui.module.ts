import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIFooterComponent } from './footer/ui-footer.component';

const components = [
  UIFooterComponent
]
@NgModule({
  imports: [CommonModule],
  declarations: components,
  exports: components,
})
export class UIModule {}
