export class Pessoa {
  private _Nome: string;
  private _Idade: number;
  private _CPF: string;
  private _Email: string;

  constructor(nome: string, idade: number, cpf: string, email: string | undefined ) {
    for (const letra of nome) {
      if (!isNaN(parseInt(letra))) {
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

    if (email)
     this._Email = email
    else
     throw new Error("e-mail não preenchido");
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


  public get Email(): string | undefined{
    return this._Email;
  }
  public set Email(value: string) {
    this._Email = value;
  }
}
