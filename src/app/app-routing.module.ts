import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{path: 'forms/:form_name', loadChildren: 'src/app/Modules/dynamic-forms/dynamic-forms.module#DynamicFormsModule'},
	{path: 'calender', loadChildren: 'src/app/Modules/calender/calender.module#CalenderModule'},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
