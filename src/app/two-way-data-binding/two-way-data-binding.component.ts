import { Component, OnInit } from '@angular/core';
import { MatFormFieldControl } from '@angular/material/form-field';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {

  name1: string = "Nome 01";
  name2: string = "Nome 02";

  client = {
    firstName: "Andre",
    lastName: "Pontes",
    address: "Rua 17, Mundo Novo",
    age: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

}
