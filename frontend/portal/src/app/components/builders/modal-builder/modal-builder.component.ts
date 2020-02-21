import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal-builder',
  templateUrl: './modal-builder.component.html',
  styleUrls: ['./modal-builder.component.scss']
})
export class ModalBuilderComponent implements OnInit {

  @Input() header: string;  
  @Input() triggerButtonText: string;
  @Input() closeButtonText: string = "Cancel";
  @Input() closeButtonIcon: string = "times-circle";
  @Input() submitButtonText: string = "Submit";
  @Input() submitButtonIcon: string = "check-circle"

  @Output() submitAction = new EventEmitter<string>();

  faTimes = faTimes;
  faCheck = faCheck;

  show:boolean;  

  constructor() {
    this.show = false;
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
