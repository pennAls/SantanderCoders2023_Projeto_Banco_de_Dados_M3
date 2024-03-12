export class Pessoa {
  private _Nome: string;
  private _Idade: number;
  private _CPF: string;

  constructor(nome: string, idade: number, cpf: string) {
    for (const letra of nome) {
      if (letra === " " || !isNaN(parseInt(letra))) {
        throw new Error("O nome não pode conter números");
      }
    }
    this._Nome = nome;

    if (!isNaN(idade) && idade >= 18 && idade < 120) {
      this._Idade = idade;
    } else {
      throw new Error("A idade é inválida");
    }
    const cpfFormatado = cpf
      .replaceAll(".", "")
      .replaceAll("-", "")
      .match(/^\d{11}$/);
    if (cpfFormatado) {
      this._CPF = cpfFormatado[0];
    } else {
      throw new Error("O CPF é inválido");
    }
  }
  public get Nome(): string {
    return this._Nome;
  }
  public set Nome(value: string) {
    this._Nome = value;
  }

  public get Idade(): number {
    return this._Idade;
  }
  public set Idade(value: number) {
    this._Idade = value;
  }

  public get CPF(): string {
    return this._CPF;
  }
  public set CPF(value: string) {
    this._CPF = value;
  }
}

// const people = new Pessoa("Fulano", 19, "040.142.444-22");
// console.log(people)
