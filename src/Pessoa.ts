export class Pessoa {
  private _Nome: string;
  private _Idade: number;
  private _CPF: string;
  private _Email: string;

  constructor(
    nome: string,
    idade: number,
    cpf: string,
    email: string | undefined
  ) {
    this._Nome = nome;
    this._Idade = idade;
    this._CPF = cpf;
    this._Email = email || "E-mail não fornecido";
  }

  public get Nome(): string {
    return this._Nome;
  }
  public set Nome(value: string) {
    if (!this.validarNome(value)) {
      throw new Error("O nome não pode conter números");
    }
    this._Nome = value;
  }

  public get Idade(): number {
    return this._Idade;
  }
  public set Idade(value: number) {
    if (!this.validarIdade(value)) {
      throw new Error("A idade é inválida");
    }
    this._Idade = value;
  }

  public get CPF(): string {
    return this._CPF;
  }
  public set CPF(value: string) {
    const cpfValido = this.validarCPF(value);
    if (!cpfValido) {
      throw new Error("O CPF é inválido");
    }
    this._CPF = value;
  }

  public get Email(): string | undefined {
    return this._Email;
  }
  public set Email(value: string) {
    if (!this.validarEmail(value)) {
      throw new Error("O e-mail é inválido");
    }
    this._Email = value;
  }

  private validarNome(nome: string): boolean {
    return !/[0-9]/.test(nome);
  }

  private validarIdade(idade: number): boolean {
    return !isNaN(idade) && idade >= 18 && idade < 120;
  }

  private validarCPF(cpf: string): string | false {
    const cpfFormatado = cpf.replace(/[\.\-]/g, "").match(/^\d{11}$/);
    return cpfFormatado ? cpfFormatado[0] : false;
  }

  private validarEmail(email: string): boolean {
    if (email === "E-mail não fornecido") return true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
