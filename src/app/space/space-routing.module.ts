import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HangarComponent } from './hangar/hangar.component';
import { PilotFormComponent } from './pilot-form/pilot-form.component';
import { PilotResolver } from './pilot.resolver';
import { EngineersRoomComponent } from './engineers-room/engineers-room.component';
import { DestructionRoomComponent } from './destruction-room/destruction-room.component';
import { DestructionGuard } from './destruction.guard';

const routes: Routes = [
  {
    path: '',
    component: HangarComponent,
    pathMatch: 'prefix',
    children: [
      {path: 'production', component: EngineersRoomComponent},
      {path: 'destruction', component: DestructionRoomComponent, canActivate: [DestructionGuard]},
      {path: '', redirectTo: 'production', pathMatch: 'full'}
    ]
  },
  {
    path: 'pilots/:id',
    component: PilotFormComponent,
    resolve: {pilot: PilotResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpaceRoutingModule { }
