import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-builder',
  templateUrl: './modal-builder.component.html',
  styleUrls: ['./modal-builder.component.scss']
})
export class ModalBuilderComponent implements OnInit {

  @Input() header: string;  
  @Input() triggerButtonText: string;
  @Input() closeButtonText: string = "Cancel";
  @Input() submitButtonText: string = "Submit";

  @Output() submitAction = new EventEmitter<string>();

  show:boolean;  

  constructor() {
    this.show = false;
    console.log("submitAction", this.submitAction);
  }

  toggleShow() {
    this.show = !this.show;
  }

  submit() {
    this.submitAction.emit("Form Data...");
  }

  ngOnInit() {
  }

}
