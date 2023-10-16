import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-cad-receita',
  templateUrl: './cad-receita.component.html',
  styleUrls: ['./cad-receita.component.scss']
})
export class CadReceitaComponent {

  constructor(private sharedService : SharedService){}

  redirectPerfilMedico(){
    this.sharedService.redirectHomeMedico()
  }

}
