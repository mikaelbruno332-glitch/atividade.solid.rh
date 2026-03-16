interface Trabalhavel {
  trabalhar(): void;
}

interface RegistravelPonto {
  registrarPonto(): void;
}

interface Assalariado {
  receberSalario(): void;
}

interface Gerenciavel {
  gerenciarEquipe(): void;
}

interface Programavel {
  escreverCodigo(): void;
}

class Gerente implements Trabalhavel, RegistravelPonto, Assalariado, Gerenciavel {

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
}

class Desenvolvedor implements Trabalhavel, RegistravelPonto, Assalariado, Programavel {

  trabalhar(): void {
    console.log("Desenvolvedor trabalhando");
  }

  registrarPonto(): void {
    console.log("Ponto registrado");
  }

  receberSalario(): void {
    console.log("Salário recebido");
  }

  escreverCodigo(): void {
    console.log("Escrevendo código");
  }
}

class Estagiario implements Trabalhavel, RegistravelPonto, Programavel {

  trabalhar(): void {
    console.log("Estagiário trabalhando");
  }

  registrarPonto(): void {
    console.log("Ponto registrado");
  }

  escreverCodigo(): void {
    console.log("Estagiário escrevendo código");
  }
}
