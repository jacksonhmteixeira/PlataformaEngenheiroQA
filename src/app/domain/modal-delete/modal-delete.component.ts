import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html'
})

export class ModalDeleteComponent {

  @Input() name;

  constructor(
    public activeModal: NgbActiveModal,
    private toastr: ToastrService,
  ) { }

  excluindoProduto(name) {
    this.activeModal.close('Close click');
    this.toastr.success(name + " excluido com sucesso!", 'Excluído');
  }
}

