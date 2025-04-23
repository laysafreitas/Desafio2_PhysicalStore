DESAFIO 02 – Desenvolvendo uma Physical Store

# Visão geral:

Physical Store é uma aplicação usando express, desenvolvida em typescript que permite encontrar lojas
fisicas com um CEP determinado.A API utiliza multiplos serviços de geolocalização para calcular com precisão
a distancia e rotas entre o endereço do usuario e as lojas cadastradas;

# Principais Funcionalidades


- Cálculo da loja mais próxima com base no CEP do usuário;

- Suporte a falhas com método alternativo de cálculo de distância (Haversine);

- Retorno da loja mais próxima e outras lojas dentro de um raio de 100km


# 📦Requisitos do Sistema

Tecnologias:typescrip;

Desenvolvimento de rotas: Poderá ser usado o Express;

Banco de dados:mongoDB;

O Básico e simples do TS utilizado:

.express;

.axios;

.winston(para logging);

.ts-node;

.@types/express;

.Dotenv (para variáveis de ambiente);

.Mongoose

# Regras da Aplicação:

O projeto é a criação de um Physical Store que irá conter as lojas de uma determinada loja eCommerce.
- Para isso você poderá utilizar a API do ViaCEP (https://viacep.com.br/) ao qual irá trazer as informações de endereço das lojas. Você poderá criar quantas lojas achar necessário.
- O usuário deverá localizar as lojas físicas presentes em um raio de 100km através da busca pelo CEP. Devendo retornar como prioridade na lista, a loja mais próxima ao CEP digitado.
- Caso não tenha nenhuma loja próxima ao CEP digitado, deverá ser tratado com mensagem informativa.
- Trazer as informações da loja física de forma organizada (Nome da Loja, Rua, Número ...).
- Deverá ser implementado a geração dos logs, com a utilização do Winston para a geração dos logs em formato json.

 # 🔧Instalação

 ```bash
 1- Clone este repositório:
 git clone https://github.com/laysafreitas/Desafio2_PhysicalStore.git

2-  Acesse a pasta do projeto:
  cd nome-do-projeto

3- Instale as dependências:
npm install

4- compile o projeto:
npm start
```

# ⚙️Configuração

- Antes de iniciar a aplicação, certifique-se de configurar as variáveis de ambiente corretamente.
  
- Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis de ambiente:
  
```env

DATABASE=mongodb://seu-banco-de-dados

```

# ▶️Uso

- Para iniciar o servidor em modo desenvolvimento:

npm start

#📌 Endpoints Principais

- POST /lojas - Adiciona uma nova loja:
```post
{
 "name": string
 "cep": string
 "city": string
 "bairro": string
 "logradouro": string
 "estado": string
 "ddd": string
}
```
- GET /api/cep/:cep - Lista todas as lojas em um raio de 100km
  
Parâmetros:
- cep (obrigatório): CEP do usuário no formato 00000000 ou 00000-000

exemplo de resposta:

{

    "_id": "67c74c193ba0364459c393c6",
    "name": "drogasil",
    "cep": "52070-571",
    "city": "recife",
    "bairro": "casa amarela",
    "estado": "PE",
    "ddd": "81",
    "latitude": -8.022013203133227,
    "longitude": -34.922386513770135,
    "__v": 0
    
}


_______________________________________________________________________________________________________________________________________________________________________________________________________________

Desenvolvida por @laysafreitas


