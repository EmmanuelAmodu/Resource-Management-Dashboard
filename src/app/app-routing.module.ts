import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { AuthGuard, NegAuthGuard } from './auth.guard';

const routes: Routes = [
	{path: '', canActivate: [AuthGuard], loadChildren: 'src/app/calender/calender.module#CalenderModule'},
	{path: 'login', canActivate: [NegAuthGuard], component: LoginComponent},
	{path: 'calender', canActivate: [AuthGuard], loadChildren: 'src/app/calender/calender.module#CalenderModule'},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
