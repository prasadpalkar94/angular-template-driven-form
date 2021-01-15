import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormComponent } from './official/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './official/template-driven-form/template-driven-form.component';

const routes: Routes = [
  {path:'',component:TemplateDrivenFormComponent},
  {path:'reactive-form',component:ReactiveFormComponent},
  {path:'template-form',component:TemplateDrivenFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
