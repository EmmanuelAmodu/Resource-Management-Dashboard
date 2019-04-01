import { Injectable } from '@angular/core';
import { DataService } from 'src/app/Services/DataService/data.service';

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    constructor(private dataService: DataService) {

    }

    getYearTask() {

    }

    getMonthTask() {

    }

    getWeekTask() {
        return [
            {
                day: "Monday",
                tasks: [
                    {
                        name: "Event Name",
                        desc: "4 Assets",
                        priority: "3",
                        time: "20:00",
                        status: "Assigned"
                    },
                    {
                        name: "Event Name",
                        desc: "4 Assets",
                        priority: "2",
                        time: "20:00",
                        status: "Assigned"
                    }
                ]
            },
            {
                day: "Tuesday",
                tasks: [
                    {
                        name: "Event Name",
                        desc: "4 Assets",
                        priority: "7",
                        time: "20:00",
                        status: "Assigned"
                    }
                ]
            },
            {
                day: "Wednesday",
                tasks: [
                    {
                        name: "Event Name",
                        desc: "4 Assets",
                        priority: "8",
                        time: "20:00",
                        status: "Assigned"
                    }
                ]
            },
            {
                day: "Thursday",
                tasks: [
                    {
                        name: "Event Name",
                        desc: "4 Assets",
                        priority: "1",
                        time: "20:00",
                        status: "Assigned"
                    },
                    {
                        name: "Event Name",
                        desc: "4 Assets",
                        priority: "3",
                        time: "20:00",
                        status: "Assigned"
                    },
                    {
                        name: "Event Name",
                        desc: "4 Assets",
                        priority: "2",
                        time: "20:00",
                        status: "Assigned"
                    },
                    {
                        name: "Event Name",
                        desc: "4 Assets",
                        priority: "6",
                        time: "20:00",
                        status: "Assigned"
                    }
                ]
            },
            {
                day: "Friday",
                tasks: [
                    {
                        name: "Event Name",
                        desc: "4 Assets",
                        priority: "4",
                        time: "20:00",
                        status: "Assigned"
                    }
                ]
            },
            {
                day: "Saturday",
                tasks: [
                    {
                        name: "Event Name",
                        desc: "4 Assets",
                        priority: "5",
                        time: "20:00",
                        status: "Assigned"
                    }
                ]
            },
            {
                day: "Sunday",
                tasks: [
                    {
                        name: "Event Name",
                        desc: "4 Assets",
                        priority: "9",
                        time: "20:00",
                        status: "Assigned"
                    }
                ]
            },
        ]
    }

    getDayTask() {

    }
}
