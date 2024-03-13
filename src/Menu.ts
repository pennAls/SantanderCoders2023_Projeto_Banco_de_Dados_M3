import { Banco_Dados } from "./Banco_Dados";
import { promptPessoaNew, promptPessoaUpdate, prompt } from "./prompts";
class Menu extends Banco_Dados {
  menu = [
    "Adicionar Usuário",
    "Listar Usuários",
    "Buscar pelo Nome",
    "Atualizar Usuário",
    "Deletar um Usuário",
  ];
  mostrarMenu(menu: string[]): void {
    console.log("Menu de Usuário\n");
    let i: any;
    for (i in menu) {
      i = Number(i);
      console.log(`${i + 1}. ${menu[i]}`);
    }
  }
  iniciar() {
    while (true) {
      let option = null;

      do {
        console.clear();
        this.mostrarMenu(this.menu);
        console.log();

        option = Number(
          prompt("Qual opção deseja? [digite 0 para sair]: ").trim()
        );
        if (isNaN(option)) {
          continue;
        }
        if (option < 0 || option > this.menu.length) {
          continue;
        }
      } while (option === null);

      if (option == 0) {
        return;
      }

      try {
        switch (option) {
          case 1:
            const pessoaIn = promptPessoaNew();
            this.adicionarUsuario(pessoaIn);
            break;
          case 2:
            this.listarUsuario();
            break;
          case 3:
            const pessoaSearch = prompt("Informe o nome para buscar: ").trim();
            this.buscarPeloNome(pessoaSearch);
            break;
          case 4:
            const nome = prompt("Informe o nome para alterar: ").trim();
            const pessoaUpdate = this.buscarPeloNome(nome);
            const pessoaNew = promptPessoaUpdate(pessoaUpdate);
            this.atualizarUsuario(nome, pessoaNew);
            break;
          case 5:
            const deleteNome = prompt("Informe o usuário a ser removido: ").trim();
            this.deleteUser(deleteNome);
            break;
        }
      } catch (error:any) {
        let messagemErro:string = error.message.replace("\n", "")
        console.error("\nOcorreu um erro:", messagemErro);
      }

      prompt("Aperte enter para continuar");
    }
  }
}

const menu = new Menu();
menu.iniciar();
