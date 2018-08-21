import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-struct',
  templateUrl: './struct.component.html',
  styleUrls: ['./struct.component.css']
})
export class StructComponent implements OnInit {

  constructor() {
    $("body").removeClass("body-login");
   }

  ngOnInit() {
  }

}
