## 1. Início Rápido

### 1.1. Instalando Dependências

Clone o projeto em sua máquina e instale as dependências com o comando:

Caso use npm
```bash
npm install
```

Caso use yarn
```bash
yarn
```

### 1.2. Variáveis de Ambiente

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**:
```
cp .env.example .env
```

Configure suas variáveis de ambiente com suas credenciais do PostgreSQL e um novo Banco de Dados da sua escolha.
Além disso, insira uma valor aleatório à variável de chave secreta ("SECRET_KEY") que irá compor o token JWT.

### 1.3. Migrations

Execute as migrations com o comando:

```bash
npx prisma migrate dev --name init
```

---

### 1.4. Inicialização do Servidor

Inicie o servidor localmente com o comando:

Caso use npm
```bash
npm run start:dev
```

Caso use yarn
```bash
yarn start:dev
```

## 2. Documentação da API

A documentação da API foi feita com o Swagger e está localizada na rota `/api` da url base.

```
http://localhost:3001/api
```
