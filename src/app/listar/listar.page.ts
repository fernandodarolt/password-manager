import { Component, OnInit } from '@angular/core';
import { Credencial } from '../crendencial';
import { FirebaseService } from '../firebase.service';
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
    public ls:LocalStorageService,
    public firebase:FirebaseService
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
  //Chama metodo de upload para o BD.
  upload(){
    this.firebase.upload();
  }

  //Recebe os dados do BD, salva no localstorage e chama metodo carregar.
  download(){
    this.firebase.download().subscribe((data:any)=>{console.log(data);
      this.ls.set('credenciais', data);
      this.carregar();
        }
      );
  }

  //Carrega a lista de dados do localstorage e armazena no array para exibir no front.
  carregar(){
    this.data = this.ls.getJSON('credenciais');
  }
}
