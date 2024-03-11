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

    ListarPessoa():Pessoa[]{
        return dados.Pessoas
    }

  get Pessoas(): Pessoa[] {
    return this.pessoas;
  }
}

const dados = new Banco_Dados();

// const novaPessoa = new Pessoa("joao", 20, "12312312312");

// const newPessoa = new Pessoa("joao", 18, "12312312312");

// console.log(dados.AdicionarPessoa(novaPessoa));
// console.log(dados.AdicionarPessoa(newPessoa));

// console.log(dados.ListarPessoa())


