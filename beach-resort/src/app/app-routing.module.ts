import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: './home/home.module#HomeModule'},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'rooms', loadChildren: './rooms/rooms.module#RoomsModule'},
  { path: 'about', loadChildren: './about/about.module#AboutModule'},
  { path: 'contact-us', loadChildren: './contact-us/contact-us.module#ContactUsModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
