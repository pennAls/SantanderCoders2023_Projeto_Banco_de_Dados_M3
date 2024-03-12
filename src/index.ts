import { Pessoa } from './Pessoa';
import { Banco_Dados } from './Banco_Dados';
import { promptPessoaNew, promptPessoaUpdate, prompt} from './prompts';


const dados = new Banco_Dados();

//Adicionar
dados.AdicionarPessoa(new Pessoa("Fulano", 19, "040.142.444-22","maria@google.com.br"));

const pessoaIn = promptPessoaNew();

dados.AdicionarPessoa(pessoaIn)


console.table(dados.ListarPessoa())

//Buscar
const pessoaSearch = prompt( 'Informe o nome para buscar: ').trim();
dados.buscarPorNome(pessoaSearch);

//Alterar
const nome = prompt( 'Informe o nome para alterar: ').trim();
const pessoaUpdate = dados.buscarPorNome(nome)
const pessoaNew = promptPessoaUpdate(pessoaUpdate)

console.log(pessoaNew)
dados.alterar(nome, pessoaNew)

console.table(dados.ListarPessoa())
