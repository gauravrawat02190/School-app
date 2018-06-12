import { Component, OnInit } from '@angular/core';
import { Project } from './Project';
import { HttpHelper } from '../HttpHelper/httphelper.service';
@Component(
    {
        "selector": 'student-form',
        templateUrl: './student.component.html',
        providers: [HttpHelper]
    }
)
export class StudentComponent implements OnInit {
    parenttextName = 'gaurav';
    project: Project;
    projectList: Project[] = [];
    classMasterList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    constructor(private _httpHelper: HttpHelper) {
        this.project = new Project();
    }
    ngOnInit() {
        this.getProjects();
    }

    getProjects() {
        const url = 'http://localhost:1180/home/getprojects';
        this._httpHelper.Get(url).subscribe((resp) => {
            this.projectList = resp;
        },
            error => {
                console.log(error);
            });
    }

    Clear() {
        this.project = new Project();
    }

    parentDelete(item) {
        const url = 'http://localhost:1180/home/DeleteProject';
        this._httpHelper.Post(url, item).subscribe((res) => {
            this.projectList = res;
        },
            error => {
                console.log(error);
            }
        );
    }

    Submit() {
        const url = 'http://localhost:1180/home/SaveProject';
        this._httpHelper.Post(url, this.project).subscribe((resp) => {
            this.projectList = resp;
            console.log(this.projectList);
            this.Clear();
        },
            error => {
                console.log(error);
            });
    }

}