DESAFIO 02 – Desenvolvendo uma Physical Store

#o que seria?
È um estabelecimento comercial que tem um endereço físico onde os clientes podem visitar,
ver produtos pessoalmente, 
experimentar itens e fazer compras diretamente no local.
Esse conceito contrasta com lojas online, que operam exclusivamente na internet.

#📦Requisitos do Sistema
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

#Regras da Aplicação:
O projeto é a criação de um Physical Store que irá conter as lojas de uma determinada loja eCommerce.
- Para isso você poderá utilizar a API do ViaCEP (https://viacep.com.br/) ao qual irá trazer as informações de endereço das lojas. Você poderá criar quantas lojas achar necessário.
- O usuário deverá localizar as lojas físicas presentes em um raio de 100km através da busca pelo CEP. Devendo retornar como prioridade na lista, a loja mais próxima ao CEP digitado.
- Caso não tenha nenhuma loja próxima ao CEP digitado, deverá ser tratado com mensagem informativa.
- Trazer as informações da loja física de forma organizada (Nome da Loja, Rua, Número ...).
- Deverá ser implementado a geração dos logs, com a utilização do Winston para a geração dos logs em formato json.

 #🔧Instalação
 1- Clone este repositório:
 git clone https://github.com/laysafreitas/Desafio2_PhysicalStore.git

2-  Acesse a pasta do projeto:
  cd nome-do-projeto

3- Instale as dependências:
npm install

#⚙️Configuração
Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis de ambiente:

DATABASE=mongodb://seu-banco-de-dados
DATABASE_LOCAL=PORT=3000
DATABASE_SENHA=sua senha

#▶️Uso
Para iniciar o servidor em modo desenvolvimento:
npm start

#📌 Endpoints Principais
POST /lojas - Adiciona uma nova loja
GET /api/cep/:cep - Lista todas as lojas em um raio de 100km

#📄 Licença
Este projeto está sob a licença MIT. Sinta-se à vontade para usá-lo e modificá-lo conforme necessário.


