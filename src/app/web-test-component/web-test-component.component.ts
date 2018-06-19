import { Component, OnInit } from '@angular/core';
import { StudentChild } from '../Student/studentchild';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-web-test-component',
  templateUrl: './web-test-component.component.html',
  styleUrls: ['./web-test-component.component.css']
})
export class WebTestComponentComponent implements OnInit {
  Item: StudentChild;
  formGroup;
  AgeListMaster: number[];
  constructor() {
    this.Item = new StudentChild();
  }

  Submit(User) {
    this.Item=User;
    console.log(this.Item);
  }

  ngOnInit() {
    this.AgeListMaster = [12, 13, 14];
    this.formGroup = new FormGroup(
      {
        "fullname": new FormControl(
          "",
          Validators.compose(
            [
              Validators.required
            ]
          )
        ),
        "Age": new FormControl(Validators.required),
        "Isvalid": new FormControl(Validators.required),

      }

    );

  }

}
