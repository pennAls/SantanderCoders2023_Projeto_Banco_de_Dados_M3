# SIMULAÇÃO DE BANCO DE DADOS

<h1 align="center">📝Projeto Final idealizado como forma de avaliação para o projeto SantanderCoders_2023, Módulo 3, JS/TS - POO. </h1>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre o Projeto</a> •
 <a href="#-requisitos">Requisitos</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-como-executar-o-projeto">Como executar o projeto</a> • 
 <a href="#-desenvolvedora">Desenvolvedor</a> • 
</p>

## 📋 Sobre o projeto

<p align="justify">
  O projeto consiste na criação de um simulador de banco de dados para armazenar informações de pessoas. São necessárias três classes principais: BancoDeDados, Pessoa e Menu. A classe BancoDeDados gerencia uma lista de pessoas, permitindo operações como adicionar, listar, buscar pelo nome, atualizar e deletar pessoas. 
  O método adicionar verifica se já existe uma pessoa com o mesmo nome antes de adicionar uma nova, enquanto o método buscarPeloNome retorna uma pessoa específica com base em seu nome. A classe Pessoa possui atributos privados como nome, idade e email, com validação de dados no construtor. A classe Menu fornece uma interface simples para interagir com o banco de dados, oferecendo opções para listar, adicionar, atualizar, buscar pelo nome e deletar pessoas. Cada funcionalidade do menu corresponde a uma operação do banco de dados. O projeto visa proporcionar uma experiência prática na implementação de operações básicas de um banco de dados simulado, utilizando conceitos de orientação a objetos e validação de dados.
</p>

## ⚙ Requisitos
- [x] Para a execução desta tarefa, vocês precisam ter 3 classes: BancoDeDados, Pessoa e um Menu.
- [x] A classe BancoDeDados deverá ter o atributo listaDePessoas e, neste atributo vocês precisam adicionar todos os dados que vão receber da aplicação.
- [x] Obrigatoriamente, vocês precisam ter os métodos de adicionar, listar, buscarPeloNome, atualizar e deletar uma pessoa.
- [x] O método adicionar, só deverá realizar a sua tarefa de adição, caso não exista uma pessoa com o mesmo nome já gravada no banco. Caso tenha, deverá dar um feedback para o usuário,informando o erro que não foi possível adicionar uma pessoa. Caso tenha tido sucesso na adição, deverá informar que foi adicionado com sucesso.
- [x] O método de listar deverá fazer a listagem de todos os dados que já existem gravados na listaDePessoas.
- [x] O método buscarPeloNome, vocês de fato vão fazer a busca da pessoa pelo nome. Caso ela exista, retorna esse objeto. Caso não exista, informa ao usuário que não existe uma pessoa com esse nome no banco de dados.
- [x]O método de atualização, deverá buscar a pessoa que vocês desejam atualizar (verificando se existe de fato ou não). Caso exista, deverá atualizar a mesma no banco de dados. Caso contrário, deverá informar um erro de que não foi localizada tal pessoa.
- [x]O método de deletar deverá, primeiramente, verificar se existe essa pessoa no banco e, caso não exista, deverá informar ao usuário. Do contrário, deverá realizar a deleção da mesma e dar o feedback ao usuário.

## 🕹 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

-  TypeScrpt
    
## 🚀 Como Executar

1. Clone o repositório: `git clone URL_DO_REPOSITORIO`
2. Instale as dependências: `npm install`
3. Execute o projeto: `npm start`


## 💻 Desenvolvedores:

<p align="left">
<a href="https://www.linkedin.com/in/lucaspenals/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="https://www.linkedin.com/in/lucaspenals/" height="30" width="40" /></a>
</p>


---

