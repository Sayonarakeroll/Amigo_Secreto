# Amigo Secreto

Este é um projeto simples de "Amigo Secreto" desenvolvido com HTML, CSS e JavaScript. O aplicativo permite que você adicione amigos a uma lista e sorteie um amigo secreto aleatoriamente.

## Tabela de Conteúdos
- [Instalação](#instalação)
- [Uso](#uso)
- [Como Funciona](#como-funciona)
- [Contribuições](#contribuições)

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/Sayonarakeroll/Amigo_Secreto.git
    ```

2. Acesse o diretório do projeto:
    ```bash
    cd amigo-secreto
    ```

3. Abra o arquivo `index.html` no seu navegador para usar a aplicação.

## Uso

1. Acesse a página `index.html` no seu navegador.
2. Adicione os nomes dos seus amigos na lista usando o campo de input e o botão **Adicionar**.
3. Clique no botão **Sortear amigo** para sortear aleatoriamente um amigo secreto entre os amigos adicionados.
4. O nome do amigo sorteado aparecerá abaixo da lista de amigos.

## Como Funciona

O aplicativo funciona da seguinte maneira:

- **Adicionar Amigo**: O usuário pode adicionar o nome de um amigo à lista ao inserir um nome no campo de texto e clicar no botão **Adicionar**.
- **Listar Amigos**: A lista de amigos é exibida abaixo do campo de input, com todos os nomes adicionados.
- **Sortear Amigo Secreto**: Quando o botão **Sortear amigo** é clicado, o script seleciona aleatoriamente um nome da lista de amigos e exibe o resultado na tela.

### Funções JavaScript

- `adicionarAmigo()`: Adiciona o nome digitado pelo usuário à lista de amigos.
- `atualizarListAmigos()`: Atualiza a lista de amigos exibida na página.
- `sortearAmigo()`: Sorteia um amigo aleatoriamente da lista de amigos e exibe o nome sorteado.

## Contribuições

Sinta-se à vontade para contribuir com melhorias ou sugestões para o projeto! Para isso, basta realizar um fork deste repositório, fazer suas alterações e enviar um pull request.

---

**Nota**: Não há backend ou banco de dados nesse projeto, pois ele funciona inteiramente no lado do cliente (navegador).

