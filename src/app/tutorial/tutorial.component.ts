import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss'],


})
export class TutorialComponent implements OnInit {
  code_ts = `
	import { Component, OnInit } from '@angular/core';

	@Component({
	  selector: 'app-tutorial',
	  templateUrl: './tutorial.component.html',
	  styleUrls: ['./tutorial.component.scss'],
	})
	export class TutorialComponent implements OnInit {

	  constructor() { }

	  ngOnInit() {
	  }

	}
  `;
  code_example_import = `
  	import { Example } from '/example';
  `;

  code_example = `
	  example: Example = {
	    id: 1,
	    name: 'Example_name'
	  };
  `;

  code_completed_example = `
  	import { Component, OnInit } from '@angular/core';
  	import { Example } from '/example';

	@Component({
	  selector: 'app-tutorial',
	  templateUrl: './tutorial.component.html',
	  styleUrls: ['./tutorial.component.scss'],
	})
	export class TutorialComponent implements OnInit {
	  example: Example = {
	    id: 1,
	    name: 'Example_name'
	  };
	  constructor() { }

	  ngOnInit() {
	  }

	}
  `;

  code_id = `
	{{example.id}}
  `;
  
  code_name = `
	{{example.name}}
  `;
  constructor() { }

  ngOnInit() {
  }

}
