import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AddTaskComponent } from './add-task/add-task.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bsModalRef: BsModalRef;
  tasks: any[] =[];
  constructor(private modalService: BsModalService) { }

  openModalWithComponent(event) {

    this.bsModalRef = this.modalService.show(AddTaskComponent, Object.assign({}, { class: '  modal-xl' }));
    this.bsModalRef.content.onClose.subscribe(result => {
      console.log('results', result);
  })
  }

  ngOnInit() {
  }

}
