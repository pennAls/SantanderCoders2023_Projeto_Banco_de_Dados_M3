import { Pessoa } from "./Pessoa.ts";


export class Banco_Dados {
    private pessoas: Pessoa[] = [];

    AdicionarPessoa(novaPessoa: Pessoa): string {
        const pessoaExiste = this.pessoas.find(
            (pessoa) => pessoa.Nome === novaPessoa.Nome
        );
        if (pessoaExiste) {
            return `Já existe uma pessoa cadastrada com esse nome.`;
        } else {
            this.pessoas.push(novaPessoa);
            return "Adicionado com sucesso.";
        }

    }

    buscarPorNome(nome: string) : Pessoa{

        const pessoaEncontrada = this.pessoas.filter(
            (pessoa) => pessoa.Nome === nome
        );

        if (pessoaEncontrada) {
            console.log(pessoaEncontrada);
            return pessoaEncontrada[0]
        } else {
            throw new Error ("Nome não encontrado");
        }

    }

    alterar(nome: string, pessoa: Pessoa) {

        const indice = this.ListarPessoa().findIndex(
            (p) => p.Nome === nome
          );
          if (indice === -1) {
            throw new Error ("Pessoa não encontrada!");
          }

          this.ListarPessoa()[indice] = pessoa;
          console.log("Pessoa atualizada com sucesso!");

    }


  ListarPessoa(): void {
    const ListaDePessoas = dados.Pessoas.forEach((pessoa) =>
      console.table(pessoa)
    );
    return ListaDePessoas;
  }

  get Pessoas(): Pessoa[] {
    return this.pessoas;

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
 
 public deleteUser(people: Pessoa) {
    const result = this._deleteUser(people);
    console.log(result);

  }
}

const dados = new Banco_Dados();


const novaPessoa = new Pessoa("joao", 20, "12312312312");
const novaPessoa2 = new Pessoa("joaoR", 20, "12312312312");

// const newPessoa = new Pessoa("joao", 18, "12312312312");

const people = new Pessoa("Fulano", 19, "040.142.444-22");
const people1 = new Pessoa("FulanoP", 19, "040.142.444-22");




