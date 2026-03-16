interface Funcionario {
  trabalhar(): void;
  registrarPonto(): void;
  receberSalario(): void;
  gerenciarEquipe(): void;
  escreverCodigo(): void;
}

class Gerente implements Funcionario {
  trabalhar(): void {
    console.log("Gerente trabalhando");
  }

  registrarPonto(): void {
    console.log("Ponto registrado");
  }

  receberSalario(): void {
    console.log("Salário recebido");
  }

  gerenciarEquipe(): void {
    console.log("Gerenciando equipe");
  }

  escreverCodigo(): void {
    throw new Error("Gerente não escreve código");
  }
}
