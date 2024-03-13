import { Pessoa } from "./Pessoa.ts";

export class Banco_Dados {
  private pessoas: Pessoa[] = [];

  adicionarUsuario(novaPessoa: Pessoa): string {
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

  buscarPeloNome(nome: string): Pessoa {
    const pessoaEncontrada = this.pessoas.filter(
      (pessoa) => pessoa.Nome === nome
    );

    if (pessoaEncontrada) {
      console.log(pessoaEncontrada);
      return pessoaEncontrada[0];
    } else {
      throw new Error("Nome não encontrado");
    }
  }

  atualizarUsuario(nome: string, pessoa: Pessoa) {
    if (!pessoa) {
      console.log(`Usuário não Encontrado`);
      return;
    }
    const indice = this.pessoas.findIndex((p) => p.Nome === nome);

    this.pessoas[indice] = pessoa;
    console.log("Pessoa atualizada com sucesso!");
  }

  listarUsuario(): Pessoa[] {
    console.table(this.pessoas);
    return this.pessoas;
  }

  get Pessoas(): Pessoa[] {
    return this.pessoas;
  }

  private deletarUsuario(deleteUser: Pessoa) {
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
    const result = this.deletarUsuario(people);
    console.log(result);
  }
}

const dados = new Banco_Dados();

const novaPessoa = new Pessoa("joao", 20, "12312312312", "fulano@gmail.com");
const novaPessoa2 = new Pessoa("joaoR", 20, "12312312312", "fulano@gmail.com");

// const newPessoa = new Pessoa("joao", 18, "12312312312");
