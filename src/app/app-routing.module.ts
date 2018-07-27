import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExploreComponent } from './components/explore/explore.component';
import { ChatRoomComponent } from './components/chat-room/chat-room.component';
import { MyApplicationComponent } from './components/my-application/my-application.component';
import { CreateApplicationComponent } from './components/my-application/create-application/create-application.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'application', component: MyApplicationComponent },
  { path: 'application/create', component: CreateApplicationComponent },
  { path: 'chat-room', component: ChatRoomComponent },
  { path: '', redirectTo: '/explore', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
