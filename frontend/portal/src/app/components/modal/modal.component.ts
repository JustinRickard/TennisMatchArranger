import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() header:string;
  @Input() show:boolean;

  @ViewChild('form', { static: false}) form: any;
  
  constructor(){
  }

  ngOnInit() {
  }

}
