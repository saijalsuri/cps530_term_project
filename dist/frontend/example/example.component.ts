import { Component, OnInit } from '@angular/core';
import { Example } from '../example';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html'
})
export class ExampleComponent implements OnInit {
	
  example: Example = {
    id: 1,
    name: 'Example_name'
  };
  
  constructor() { }

  ngOnInit() {
  }

}
