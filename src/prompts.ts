import { Pessoa } from './Pessoa';
import promptSync from 'prompt-sync';
export const prompt = promptSync();


export function promptPessoaNew() : Pessoa {

    console.clear();
    const cpf = prompt('Informe o CPF: ').trim();
    const nome = prompt('Informe o Nome: ').trim();
    const idade = prompt('Informe a idade: ').trim();
    const email  = prompt('Informe o email: ').trim();
    
   return new Pessoa(nome, parseInt(idade), cpf, email);

}

export function promptPessoaUpdate(pessoa: Pessoa) : Pessoa {

    console.clear();

    console.log("Atualizando dados para " + pessoa.Nome + "\n")
    const cpf = prompt( pessoa.CPF + ' - Informe o novo CPF: ').trim();
    const nome = prompt(pessoa.Nome + ' - Informe o novo Nome: ').trim();
    const idade = prompt(pessoa.Idade + ' - Informe a nova idade: ').trim();
    const email  = prompt(pessoa.Email + ' - Informe o novo email: ').trim();
    
   return new Pessoa(nome, parseInt(idade), cpf, email);

}
