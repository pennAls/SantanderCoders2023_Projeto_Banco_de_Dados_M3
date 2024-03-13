import { Pessoa } from "./Pessoa";
import promptSync from "prompt-sync";
export const prompt = promptSync();

export function promptPessoaNew(): Pessoa {
  console.clear();
  const nome = prompt("Informe o Nome: ").trim();
  const idade = prompt("Informe a idade: ").trim();
  const email = prompt("Informe o email: ").trim();
  const cpf = prompt("Informe o CPF: ").trim();

  return new Pessoa(nome, parseInt(idade), cpf, email);
}

export function promptPessoaUpdate(pessoa: Pessoa): Pessoa {
  console.clear();
  if (pessoa) {
    console.log("Atualizando dados para " + pessoa.Nome + "\n");
    const nome = prompt(pessoa.Nome + " - Informe o novo Nome: ").trim();
    const idade = prompt(pessoa.Idade + " - Informe a nova idade: ").trim();
    const email = prompt(pessoa.Email + " - Informe o novo email: ").trim();
    const cpf = prompt(pessoa.CPF + " - Informe o novo CPF: ").trim();

    return new Pessoa(nome, parseInt(idade), cpf, email);
  } else{
    return pessoa
  }
}
