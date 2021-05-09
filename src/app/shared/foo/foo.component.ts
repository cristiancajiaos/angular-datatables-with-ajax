import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss']
})
export class FooComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  constructor() { }

  ngOnInit() {
    this.dtOptions = {
      ajax: 'assets/data/data.json',
      columns: [
        {
          title: 'ID',
          data: 'id'
        },
        {
          title: 'First name',
          data: 'firstName'
        },
        {
          title: 'Last name',
          data: 'lastName'
        }
      ]
    };
  }

}
