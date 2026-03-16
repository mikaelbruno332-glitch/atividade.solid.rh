# Atividade Prática - SOLID

## Parte 1 - Identificação das Violações

### Violação do ISP

A interface Funcionario obriga todas as classes a implementar
métodos que nem todas utilizam, como gerenciarEquipe e escreverCodigo.

Por exemplo:
- Gerente não escreve código
- Desenvolvedor não gerencia equipe
- Estagiario não recebe salário

Isso viola o princípio ISP porque as classes são obrigadas a
implementar métodos desnecessários.

Impacto:
O sistema fica mais difícil de manter e algumas classes precisam lançar erro.


### Violação do LSP

Algumas classes lançam erro em métodos que não utilizam.

Exemplo:

Gerente lança erro em escreverCodigo()
Desenvolvedor lança erro em gerenciarEquipe()

Isso viola o princípio LSP porque uma classe filha deveria poder
substituir a classe base sem causar erros.

Impacto:
O sistema pode quebrar em tempo de execução.


### Violação do DIP

O sistema depende diretamente da interface Funcionario com muitas responsabilidades.

O correto seria depender de interfaces menores e mais específicas.

Impacto:
Dificulta a manutenção e extensão do sistema.
