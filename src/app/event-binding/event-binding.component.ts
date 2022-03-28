import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  buttonName = 'Peixe Frito';
  buttonColors = ['warn', 'accent', 'primary'];
  idx = 0;
  i = 0;

  constructor() {  }

  spinnerMode: any = "determinate";
  btnEnable = true;

  ngOnInit(): void {
    setInterval( () => {
      this.idx = (this.idx+1) % this.buttonColors.length;
    }, 5000)
  }

  save(){
    console.log('Click');
  }

  inc(){
    this.i++;
    this.buttonName = "It was clicked " + this.i+ " times."
  }

  disable() {
    this.btnEnable = false;
    this.spinnerMode = "indeterminate";
    setTimeout ( ()=>{
      this.btnEnable = true;
      this.spinnerMode = "determinate";
    }, 5000);
  }
}
