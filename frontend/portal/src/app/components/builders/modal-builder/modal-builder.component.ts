import { Component, OnInit, Input, Output, EventEmitter, ViewChildren, QueryList, ViewChild, ContentChildren, ContentChild } from '@angular/core';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, NgForm } from '@angular/forms';
import { ModalComponent } from '../../modal/modal.component';
import { SinglesResultFormComponent } from 'src/app/features/singles-result/singles-result-form/singles-result-form.component';

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

  @ContentChild('singles-result-form', { static: false}) form: any;

  @Output() submitAction = new EventEmitter<any>();

  faTimes = faTimes;
  faCheck = faCheck;

  show:boolean;

  @ViewChild(ModalComponent, { static: false}) modal: any;
  

  constructor() {
    this.show = false;
  }

  toggleShow() {
    this.show = !this.show;
  }

  ngOnInit() {
  }


  submit() {
    this.submitAction.emit();
  }
}
