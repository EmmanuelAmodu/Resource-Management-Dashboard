import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeekComponent } from './Components/week/week.component';

import { CalenderRoutingModule } from './Calender-routing.module';
import { CalenderComponent } from './calender.component';

@NgModule({
    declarations: [
        WeekComponent,
        CalenderComponent
    ],
    imports: [
        CommonModule,
        CalenderRoutingModule
    ]
})
export class CalenderModule { }
