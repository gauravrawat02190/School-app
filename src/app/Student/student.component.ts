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

    FileChangeEvent(fileInput: any) {
        let FileTxt:string;
        if (fileInput.target.files && fileInput.target.files[0]) {
            var filedata = new FormData();
            FileTxt = fileInput.target.files[0].name;
            console.log(FileTxt);
            filedata.append('uploadFile', fileInput.target.files[0], fileInput.target.files[0].name);
            console.log(filedata);
            this._httpHelper.postfile('http://localhost:1180/home/UploadFile' , filedata).subscribe((resp) => {
                // this.AddNotify(resp.Status, resp.Message);
            },
                error => {
                    // this.alertService.error(error);
                });
        }
    }

    parentDelete(item) {
        const url = 'http://localhost:1180/home/DeleteProject';
        this._httpHelper.Post(url, item).subscribe((res) => {
            this.projectList = res;
        },
            error => {
                console.log(error);           
            },
            ()=>{
                alert("Entry Deleted");
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