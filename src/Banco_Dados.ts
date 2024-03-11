import { Pessoa } from "./Pessoa.ts";

class Banco_Dados {
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

  ListarPessoa(): void {
    const ListaDePessoas = dados.Pessoas.forEach((pessoa) =>
      console.table(pessoa)
    );
    return ListaDePessoas;
  }

  get Pessoas(): Pessoa[] {
    return this.pessoas;
  }
}

const dados = new Banco_Dados();

const novaPessoa = new Pessoa("joao", 20, "12312312312");
const novaPessoa2 = new Pessoa("joaoR", 20, "12312312312");

// const newPessoa = new Pessoa("joao", 18, "12312312312");

console.log(dados.AdicionarPessoa(novaPessoa));
console.log(dados.AdicionarPessoa(novaPessoa2));
// console.log(dados.AdicionarPessoa(newPessoa));

dados.ListarPessoa();
