import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Project } from './Project';
import { SortPipes } from '../Helpers/sortpipe.component';
import { StudentChild } from './studentchild';

@Component({
    selector: 'project-grid',
    templateUrl: './projectgrid.component.html',
    providers: [SortPipes]
}
)

export class ProjectGridComponent implements OnInit {
    @Input() projectGridList: Project[] = [];
    sortby: string = 'ProjectName';
    sortop: string = 'asc';
    searchprop: string;
    searchtext: string;
    searchbool: boolean = false;
    public sortProp: string[];
    constructor() {
        this.sortProp = ['ProjectName', 'RollNo', 'ClassNo', 'TeamSize'];
    }

    @Output() Delete = new EventEmitter();
    DeleteEvent(item) {
        this.Delete.emit(item);
    }

    Searchtoggle() {
        this.searchbool = !this.searchbool;
        this.searchprop = "";
        this.searchtext = "";
    }

    searchText(value, prop) {
        this.searchprop = prop;
        this.searchtext = value;
    }

    ngOnInit() {

    }
}