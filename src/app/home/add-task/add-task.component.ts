import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  public onClose: Subject<boolean>;

  modalRef: BsModalRef;

  addForm = this.formBuilder.group({
    title: [
      '',
      [
        Validators.required,

      ]
    ],
    desc: [
      '',
      [
        Validators.required,

      ]
    ],
    date: [
      '',
      [
        Validators.required,

      ]
    ],
  });

  public errorMessages = {

    title: [
      { type: 'required', message: 'field required' },

    ],
    desc: [
      { type: 'required', message: 'field is required' },
    ],
    date: [
      { type: 'required', message: 'field is required' },
    ],
  };

  get title() {
    return this.addForm.get("title");
  }
  get desc() {
    return this.addForm.get("desc");
  }
  get date() {
    return this.addForm.get("date");
  }
  constructor(
    private formBuilder: FormBuilder,
    public bsModalRef: BsModalRef,
    private modalService: BsModalService) { }

submit(){
  this.onClose.next(this.addForm.value);
  this.bsModalRef.hide();
}

  ngOnInit() {

    this.onClose = new Subject();
  }

}
