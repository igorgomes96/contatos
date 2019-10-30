import { Component } from '@angular/core';
import { Contato } from './contato';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contatos: Contato[] = [
    {
      id: 1,
      email: 'email1@email.com',
      nome: 'Contato 1',
      telefone: '(34) 9999-8888',
      dataCadastro: new Date(2019, 1, 1)
    },
    {
      id: 2,
      email: 'email2@email.com',
      nome: 'Contato 2',
      telefone: '(34) 9999-7777',
      dataCadastro: new Date(2019, 2, 2)
    },
    {
      id: 3,
      email: 'email3@email.com',
      nome: 'Contato 3',
      telefone: '(34) 9999-6666',
      dataCadastro: new Date(2019, 3, 3)
    }
  ];

  contatoSelecionado: Contato;

  selecionaContato(contato: Contato) {
    console.log(contato);
    this.contatoSelecionado = { ...contato }; // Shallow copy
  }

  novo() {
    this.contatoSelecionado = {
      dataCadastro: new Date(),
      email: '',
      id: 0,
      nome: '',
      telefone: ''
    };
  }

  salvarContato() {
    if (this.contatoSelecionado && !this.contatoSelecionado.id) {  // Contato novo
      this.contatoSelecionado.id = this.contatos.length + 1;
      this.contatos.push(this.contatoSelecionado);
    } else {  // Contato existente
      const contatoExistente = this.contatos.find(c => c.id === this.contatoSelecionado.id);
      if (contatoExistente) {
        Object.assign(contatoExistente, this.contatoSelecionado);
      }
    }
    this.contatoSelecionado = null;
  }

  excluir() {
    const indexContato = this.contatos.findIndex(c => c.id === this.contatoSelecionado.id);
    this.contatos.splice(indexContato, 1);
    this.contatoSelecionado = null;
  }

  cancelar() {
    this.contatoSelecionado = null;
  }

}
