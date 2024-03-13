export class Pessoa {
  private _Nome: string;
  private _Idade: number;
  private _CPF: string;
  private _Email: string;

  constructor(nome: string, idade: number, cpf: string, email: string) {
    for (const letra of nome) {
      if (letra === " ") {
        throw new Error("\nO nome não pode conter espaços.");
      }
      if (!isNaN(parseInt(letra))) {
        throw new Error("\nO nome não pode conter números.");
      }
    }
    this._Nome = nome;

    if (!isNaN(idade) && idade >= 18 && idade < 120) {
      this._Idade = idade;
    } else {
      throw new Error("\nA idade é inválida.");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error("\nO email está inválido.");
    }
    this._Email = email;

    const cpfFormatado = cpf
      .replaceAll(".", "")
      .replaceAll("-", "")
      .match(/^\d{11}$/);
    if (cpfFormatado) {
      this._CPF = cpfFormatado[0];
    } else {
      throw new Error("\nO CPF é inválido.");
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

  public get Email(): string | undefined {
    return this._Email;
  }
  public set Email(value: string) {
    this._Email = value;
  }
}
