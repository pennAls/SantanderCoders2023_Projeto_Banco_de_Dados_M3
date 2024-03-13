import { Pessoa } from "./Pessoa";
export class Banco_Dados {
  private pessoas: Pessoa[] = [];

  private adicionarUsuario(novaPessoa: Pessoa): string | void {
    const pessoaExiste = this.pessoas.find(
      (pessoa) => pessoa.Nome === novaPessoa.Nome
    );
    if (pessoaExiste) {
      console.log(
        `Ocorreu um erro: Já existe uma pessoa cadastrada com o nome "${novaPessoa.Nome}".\n`
      );
      return;
    } else {
      this.pessoas.push(novaPessoa);
      console.log(`O usuário "${novaPessoa.Nome}" foi adicionado com sucesso.\n`);
      return;
    }
  }

  private buscarPeloNome(nome: string): Pessoa {
    const pessoaEncontrada = this.pessoas.filter(
      (pessoa) => pessoa.Nome === nome
    );

    if (pessoaEncontrada[0]) {
      console.log(pessoaEncontrada);
      return pessoaEncontrada[0];
    } else {
      console.error(`Ocorreu um erro: O usuário chamado "${nome}" não foi encontrado.\n`);
      return pessoaEncontrada[0];
    }
  }

  private atualizarUsuario(nome: string, pessoa: Pessoa) {
    if (!pessoa) {
      console.log(`Ocorreu um erro: Usuário "${nome}" não encontrado.\n`);
      return;
    }
    const indice = this.pessoas.findIndex((p) => p.Nome === nome);

    this.pessoas[indice] = pessoa;
    console.log(`O usuário "${nome}" foi atualizado com sucesso!\n`);
  }

  private listarUsuario(): Pessoa[] {
    console.table(this.pessoas);
    return this.pessoas;
  }

  get Pessoas(): Pessoa[] {
    return this.pessoas;
  }

  private deletarUsuario(deleteUserName: string) {
    if (this.pessoas.length === 0) {
      return `Ocorreu um erro: Não há um usuário cadastrado chamado "${deleteUserName}".`;
    }
    const pessoaIndex = this.pessoas.findIndex(
      (person) => person.Nome === deleteUserName
    );
    if (pessoaIndex !== -1) {
      this.pessoas.splice(pessoaIndex, 1);
      return `Usuário "${deleteUserName}"deletado com sucesso.`;
    } else {
      return `Ocorreu um erro: Usuário "${deleteUserName}" não encontrado.`;
    }
  }

  public adicionarUser(novaPessoa: Pessoa): string | void {
    return this.adicionarUsuario(novaPessoa);
  }

  public buscarUser(nome: string): Pessoa {
    return this.buscarPeloNome(nome);
  }

  public atualizarUser(nome: string, pessoa: Pessoa): void {
    this.atualizarUsuario(nome, pessoa);
  }

  public listarUser(): Pessoa[] {
    return this.listarUsuario();
  }

  public deleteUser(people: string) {
    const result = this.deletarUsuario(people);
    console.log(result);
  }
}
