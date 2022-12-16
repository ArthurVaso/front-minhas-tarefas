import { TarefaService } from './../tarefa/tarefa.service';
import { ConfirmationDialogService } from './../../material-components/services/dialog/confirmation-dialog/confirmation-dialog.service';
import { ToastService } from './../../material-components/services/toast/toast.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  public sourceTarefa = [] as any;

  categoryId = 0;

  panelOpenState = false;

  arrowState = {} as any;

  constructor(
    private toastService: ToastService, 
    private tarefaService : TarefaService, 
    private activatedRoute: ActivatedRoute,
    private confirmationService: ConfirmationDialogService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listTarefa();
  }

  onClickDelete($event:any, categoryId : number | undefined){

    $event.stopPropagation();

    this.categoryId = categoryId as number

    this.confirmationService.openDialog('', this.deleteById.bind(this))
  }

  deleteById() {
    this.tarefaService.delete(this.categoryId as number).subscribe({
      next: () => {
        this.toastService.openSuccessToast('Categoria excluída com sucesso!');

        this.router.navigate(['/listar-tarefa']);
  
        this.listTarefa(false);
      },
      error: err => {
        this.toastService.openErrorToast(err.error.mensagem, 3.2);
      }
    })
  }

  onClickInsideArrow($event: any, category: any) {
    $event.stopPropagation();

    Object.keys(this.arrowState).forEach((key: any) => {
    
      if(key != category.id) {
        this.arrowState[key] = false;
      }

    });

    this.arrowState[category.id] = !this.arrowState[category.id];

  }

  listTarefa(isFirst: boolean = true){

    
    if(isFirst) {
      this.sourceTarefa = this.activatedRoute.snapshot.data['categories'];
      this.sourceTarefa.forEach((cat: any) => {
        this.arrowState[cat.id] = false
      });
      
    } else {
      this.tarefaService.list().subscribe( category => {
        this.sourceTarefa = category;
      })
    }

  }

}
