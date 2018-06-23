import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExploreComponent } from './explore/explore.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { ApplicationComponent } from './application/application.component';
import { CreateApplicationComponent } from './application/create-application/create-application.component';

const routes: Routes = [
  { path: 'explore', component: ExploreComponent },
  { path: 'application', component: ApplicationComponent },
  { path: 'application/create', component: CreateApplicationComponent },
  { path: 'chat-room', component: ChatRoomComponent },
  { path: '', redirectTo: '/explore', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
