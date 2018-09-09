import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpaceModule } from './space/space.module';
import { BlackHoleComponent } from './black-hole/black-hole.component';

// kolejność sciezek ma znaczenie
const routes: Routes = [
  {path: 'space', loadChildren: () => SpaceModule},
  {path: 'intel', loadChildren: 'src/app/intel/intel.module#IntelModule'},
  {path: '', redirectTo: 'space', pathMatch: 'full'},
  {path: '**', component: BlackHoleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
