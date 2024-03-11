import { Pessoa } from "./Pessoa.ts";

class Banco_Dados {
  private pessoas: Pessoa[] = [];

  private _deleteUser(deleteUser: Pessoa) {
    if (this.pessoas.length === 0) {
      return "Não há Usuários cadastrados";
    }
    const pessoaIndex = this.pessoas.findIndex(
      (person) => person.Nome === deleteUser.Nome
    );
    if (pessoaIndex !== -1) {
      this.pessoas.splice(pessoaIndex, 1);
      return "Usuário deletado com sucesso";
    } else {
      return "Usuário não encontrado";
    }
  }

  listar(): Pessoa[] {
    return this.pessoas;
  }

  add(people: Pessoa) {
    this.pessoas.push(people);
  }

 public deleteUser(people: Pessoa) {
    const result = this._deleteUser(people);
    console.log(result);
  }
}

const dados = new Banco_Dados();
const people = new Pessoa("Fulano", 19, "040.142.444-22");
const people1 = new Pessoa("FulanoP", 19, "040.142.444-22");

dados.add(people);
console.log(dados.listar());
dados.deleteUser(people1);
console.log(dados.listar());