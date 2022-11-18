import { Component, OnInit } from '@angular/core';
import { Credencial } from '../crendencial';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {
  public data:Array<Credencial> = [];
  public icon_type:string = 'eye-outline';
  public pass_type:string = 'password' ;
  
  constructor(
    public local_storage:LocalStorageService
  ) {}

  ngOnInit() {
    this.carregar();
  }

  exibir(){
    if (this.icon_type == 'eye-outline'){
        this.icon_type = 'eye-off-outline';
        this.pass_type = 'text';
    } else {
      this.icon_type = 'eye-outline';
      this.pass_type = 'password';
    }

  }

  carregar(){
    this.data = this.local_storage.getJSON('credenciais');
  }
}
