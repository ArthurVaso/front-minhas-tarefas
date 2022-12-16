import { MatTooltipModule } from '@angular/material/tooltip';
import { TarefaService } from './tarefa.service';
import { ToastService } from './../../material-components/services/toast/toast.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormType } from 'src/app/utils/constants/enums/form-enum';
import { Tarefa } from './tarefa';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {

  titulo = '';

  description = '';

  type = [];

  period = '15';

  recurrent = 'Sim';

  txtButton = "SALVAR"

  public tarefaId : number = 0

  sourceType = [
    {Description: 'Fixo'},
    {Description: 'Variável'},
  ]

  sourceRecurrent = [
    {Description: 'Sim'},
    {Description: 'Não'},
  ]


  public formType = FormType.INSERT 

  constructor(
    private activatedRoute: ActivatedRoute,
    private tarefaService: TarefaService,
    private toastService: ToastService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.tarefaId = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    if(this.tarefaId) {
      this.formType = FormType.EDIT;
      this.txtButton = "ATUALIZAR"
      this.tarefaService.getById(Number(this.tarefaId)).subscribe(tarefa => {
        this.titulo = tarefa.titulo;
        this.description = tarefa.descricao || '';

      });
    }

  }

  onClickButtonSalvar() {

    if(!this.titulo) {
      this.toastService.openErrorToast('O titulo da tarefa é obrigatório');
      return;
    }

    const tarefa = {
      titulo: this.titulo,
      descricao: this.description
    } as Tarefa

    if(this.formType === FormType.INSERT){
      this.tarefaService.create(tarefa).subscribe({
        next: tarefa => {
          this.toastService.openSuccessToast('Tarefa cadastrada com sucesso!');

          this.router.navigate(['/listar-tarefa']);
        },
        error: err => {
          this.toastService.openErrorToast(err.error.mensagem);
        }
      })

      return
    }

    tarefa.id = this.tarefaId,

    this.tarefaService.update(tarefa).subscribe({
      next: tarefa => {
        this.toastService.openSuccessToast('Tarefa atualizada com sucesso!');

        this.router.navigate(['/listar-tarefa']);
      },
      error: err => {
        this.toastService.openErrorToast(err.error.mensagem);
      }
    })

  }

}
