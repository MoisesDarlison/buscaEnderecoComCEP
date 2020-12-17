# Busca Cep, 
## Consumindo dados de uma API de terceiros
Pequeno projeto de back-end utilizando javascript, API no modelo RESTfull, com conexão com banco de dados utilizando migrations, onde esta consome dados de outra API

# Variáveis de ambiente
Antes de executar a API, você precisa configurar o arquivo .env. Use o exemplo disponível, fornecido neste projeto, para criar o seu.

Você pode copiá-lo executando o seguinte comando no diretório raiz deste projeto:

`$ cp .envExemples .env`

Depois de concluir, você precisará definir as chaves no seu arquivo .env


# Configuração
Antes de executar este projeto, você deve instalar todas as dependências necessárias listadas no arquivo package.json

`$ npm i --save express dotenv sequelize axios bcrypt jsonwebtoken pg-hstore pg`
`$ npm i --save-dev nodemon`

# Executando migrations
Depois de instalar todas as dependências, antes de iniciar o servidor, é necessário executar algumas migrations para criar os esquemas do banco de dados.

Você pode fazer isso executando:

`$ npx sequelize db:create`
`$ npx sequelize db:migrate`

Se você precisar reverter as alterações, execute o seguinte comando:

`$ npx sequelize db:migrate:undo:all`

# Executando a API

Depois de concluir todas as etapas anteriores, você estará pronto para começar a usar a API. Inicie o aplicativo executando o seguinte comando:

`$ npm start`

Caso deseje realizar teste em ambiente de desenvolvedor utilizar o comando:

`$ npm run dev`

_A API usa a porta 3333 como padrão, podendo ser alterada nas variáveis de ambiente._

# Executando testes

Você pode executar os testes unitários por meio do Postman ou qualquer outra aplicação do gênero.

# Rotas

## URL Inicial

http://address:port

# USUARIOS

## Novo Usuário

`POST: /user` - Necessário enviar name e password por meio de JSON pelo Body, lembrando que o email nao pode ser repetido

Ex: 
{
    "name":"test",
    "password": "test",
    "email": "test@test"
}

## Deletar Usuário

`DEL: /user/ID` -(ID sendo o identificador do usuario desejado)

# AUTENTICACAO
## Autenticação do Usuário

`POST: /login` - Necessário enviar name e password por meio de JSON pelo Body 

Ex: 
{
    "email": "test@test"
    "password": "test" }

#### Esta operacao retornara um token(Authorization) que sera utilizado parar acessar as tasks deste usuario

# ADDRESS
### _Para operar com os enderecos será necessário enviar a Authorization por meio de headers_

## NOVO ENDERECO
`POST: /address` - Necessário enviar zipcode e houseNumber por meio de JSON pelo Body

OBS: Os dados serao recebidos do site https://viacep.com.br

Ex:
{
    "zipcode":"01311100",
    "houseNumber": 10 
}

