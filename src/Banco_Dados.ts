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


    ListarPessoa(): Pessoa[] {
        return this.Pessoas
    }

    get Pessoas(): Pessoa[] {
        return this.pessoas;
    }
}



