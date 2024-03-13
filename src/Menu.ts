import { Pessoa } from "./Pessoa";
import { Banco_Dados } from "./Banco_Dados";
import { promptPessoaNew, promptPessoaUpdate, prompt } from "./prompts";

class Menu {
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

      switch (option) {
        case 1:
          const pessoaIn = promptPessoaNew();
          dados.adicionarUsuario(pessoaIn);
          break;
        case 2:
          dados.listarUsuario();
          break;
        case 3:
          const pessoaSearch = prompt("Informe o nome para buscar: ").trim();
          dados.buscarPeloNome(pessoaSearch);
          break;
        case 4:
          const nome = prompt("Informe o nome para alterar: ").trim();
          const pessoaUpdate = dados.buscarPeloNome(nome);
          const pessoaNew = promptPessoaUpdate(pessoaUpdate);
          dados.atualizarUsuario(nome, pessoaNew);

          break;
        case 5:
          const deleteNome = prompt(
            "Informe o usuário a ser removido: "
          ).trim();
          dados.deleteUser(deleteNome);

          break;
      }

      prompt("Aperte enter para continuar");
    }
  }
}

const dados = new Banco_Dados();
const menu = new Menu();
menu.iniciar();