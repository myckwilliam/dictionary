# Dictionary

Esse projeto usa [DictionaryAPI](https://dictionaryapi.dev/) para informar a descrição das palavras buscadas em inglês.

## Funcionamento

É bastante simples. Ao abrir a aplicação o usuário poderá:

1. Escrever uma palavra em inglês no input
2. Apertar `ENTER` ou clicar no botão `Search`
3. Se a palavra estiver contemplada pela API, a mesma é mostrada junto ao seu significado
4. Senão, é mostrada uma mensagem de `Not Found`

Pode-se ver um exemplo na imagem:

![image](https://user-images.githubusercontent.com/75875219/202854583-d9b67836-470c-4f8f-8b1b-a5649e3e601c.png)


## Rodando o projeto

### Desenvolvimento

Para rodar o projeto em modo de desenvolvimento:

1. Clone para a sua máquina
2. Utilize o comando `npm i` para instalar as dependências
3. Utilize `ng s` para servir o projeto (precisa do Angular CLI instalado na máquina)
4. Visite http://localhost:4200

### Produção

Para acessar o projeto em produção, basta acessar o link [Dictionary](https://dictionary-puce.vercel.app/)
