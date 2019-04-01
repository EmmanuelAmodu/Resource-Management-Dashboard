import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeekComponent } from './Components/week/week.component';
import { CalenderComponent } from './calender.component';

const routes: Routes = [
    {path: '', component: CalenderComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CalenderRoutingModule { }
