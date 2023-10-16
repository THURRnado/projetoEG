import { SharedService } from 'src/app/shared.service';
import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-lista-de-pacientes',
  templateUrl: './lista-de-pacientes.component.html',
  styleUrls: ['./lista-de-pacientes.component.scss']
})
export class ListaDePacientesComponent {


  constructor(private elementRef: ElementRef) {}

  adicionar() {
    // Obtenha os valores dos campos de entrada
    const nomeInput = document.getElementById('nome') as HTMLInputElement;
    const idadeInput = document.getElementById('lIdade') as HTMLInputElement;
    const sexoInput = document.getElementById('lSexo') as HTMLInputElement;

    const nome = nomeInput.value;
    const idade = idadeInput.value;
    const sexo = sexoInput.value;

    // Adicione uma nova linha à tabela
    const tabela = this.elementRef.nativeElement.querySelector('#tabela');
    const newRow = tabela.insertRow(tabela.rows.length);

    // Insira os valores nos campos da nova linha
    const cell1 = newRow.insertCell(0);
    cell1.classList.add('table-cell');
    const cell2 = newRow.insertCell(1);
    cell2.classList.add('table-cell');
    const cell3 = newRow.insertCell(2);
    cell3.classList.add('table-cell');
    const cell4 = newRow.insertCell(3);

    cell1.innerHTML = nome;
    cell2.innerHTML = idade;
    cell3.innerHTML = sexo;

    // Adicione um botão "Remover" na quarta coluna
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remover';
    removeButton.addEventListener('click', () => {
      // Adicione aqui a lógica para remover a linha quando o botão "Remover" for clicado
      tabela.deleteRow(newRow.rowIndex);
    });
    cell4.appendChild(removeButton);

    // Feche o modal
    this.fecharModal();
  }


  adicionarPaciente() {
    const modal = this.elementRef.nativeElement.querySelector('#modal');
    modal.style.display = 'block';
  }

  fecharModal() {
    const modal = this.elementRef.nativeElement.querySelector('#modal');
    modal.style.display = 'none';
  }

}

