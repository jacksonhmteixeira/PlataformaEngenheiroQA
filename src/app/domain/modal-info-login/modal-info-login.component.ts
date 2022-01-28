import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-modal-info-login',
  templateUrl: './modal-info-login.component.html'
})

export class ModalInfoLoginComponent {

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

