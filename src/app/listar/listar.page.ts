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
  constructor(
    public local_storage:LocalStorageService
  ) {}

  ngOnInit() {
    this.carregar();
  }

  carregar(){
    this.data = this.local_storage.getJSON('credenciais');
  }
}
