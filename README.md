
# Backend - Glitter & Glamour

Este é o backend para o projeto **Glitter & Glamour**, um simulador de e-commerce de cosméticos. 

O backend foi desenvolvido utilizando **Express** e **PostgreSQL** com **TypeORM**.

---

## 📋 Pré-requisitos

Antes de rodar o projeto, você precisa ter as seguintes ferramentas instaladas:

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org)
- [PostgreSQL](https://www.postgresql.org/) (para o banco de dados)
- **.env** configurado (veja abaixo)

---

## 🚀 Rodando o projeto

#### 1. Clone o repositório:
```bash
$ git clone git@github.com:Angelmzm/glitter_and_glamour_back.git
```

#### 2. Acesse o diretório do projeto:
```bash
$ cd glitter_and_glamour_back
```

#### 3. Instale as dependências:
```bash
$ npm install
```

#### 4. Configure o arquivo `.env`
Crie um arquivo `.env` a partir do `.env.example` e configure os valores para o banco de dados e JWT:

```bash
$ cp .env.example .env
```

Preencha o arquivo `.env` com as informações do banco de dados e a chave secreta do JWT. Exemplo:

```bash
DB_HOST=localhost
DB_PORT=5432
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=glitter_glamour_db
JWT_SECRET=sua_chave_secreta
```

#### 5. Rode o projeto com Nodemon:
```bash
$ npm run dev
```

O servidor será iniciado em `http://localhost:3000`.

---

## 🔐 Autenticação e Autorização

O projeto já possui middlewares para autenticação e autorização de administrador. No entanto, atualmente, as rotas não utilizam essas proteções por padrão. Se você deseja habilitar a autenticação e a verificação de permissões, pode facilmente descomentar as linhas correspondentes no código.

### Middleware de Autenticação
O middleware **`authenticateToken`** verifica se o token JWT fornecido é válido. Ele pode ser usado nas rotas que exigem autenticação.

**Exemplo de uso**:
```js
const authenticateToken = require('../middlewares/authenticateToken');

router.post('/create', authenticateToken, productCreateController.createProduct);
```

### Middleware de Autorização (Administrador)
O middleware **`isAdmMiddleware`** verifica se o usuário autenticado tem permissões de administrador. Ele pode ser usado em rotas que exigem acesso restrito a administradores.

**Exemplo de uso**:
```js
const isAdmMiddleware = require('../middlewares/isAdmMiddleware');

router.post('/create', authenticateToken, isAdmMiddleware, productCreateController.createProduct);
```

### Como habilitar
As rotas do backend possuem exemplos de como você pode usar esses middlewares, mas atualmente eles estão comentados no código. Para habilitar a proteção nas rotas, basta descomentar as linhas correspondentes e garantir que o token JWT seja fornecido para as requisições.

---

## 🛠️ Endpoints da API

### **Rotas de Produtos (Products)**

1. **POST** `/api/products/create`  
   Cria um novo produto.  

   **Payload esperado:**  
   ```json
   {
     "productname": "nome do produto",
     "price": 100.50,
     "description": "descrição do produto",
     "detail": "detalhes do produto",
     "is_newArrivals": true,
     "is_topSelling": true,
     "category": 1,
     "cover_image": "",
     "first_image": "https://linkDaImagem.png",
    "second_image": "https://linkDaImagem.png",
    "third_image": "https://linkDaImagem.png",
   }
   ```

2. **PUT** `/api/products/update/:id`  
   Atualiza um produto existente.  

3. **DELETE** `/api/products/delete/:id`  
   Deleta um produto pelo ID.  

4. **GET** `/api/products/list/:id`  
   Retorna um produto pelo ID.

5. **GET** `/api/products/list`  
   Retorna todos os produtos cadastrados.

### **Rotas de Usuários (Users)**

1. **POST** `/api/users/register`  
   Cria um novo usuário (registro).  
   **Payload esperado:**  
   ```json
   {
     "username": "usuario",
     "email": "usuario@exemplo.com",
     "cpf": "12345678900",
	   "cellphone": "1234567890",
     "password": "senha123",
     "confirmPassword": "senha123"
   }
   ```

2. **POST** `/api/users/login`  
   Realiza o login de um usuário e retorna um token JWT.  
   **Payload esperado:**  
   ```json
   {
     "username": "usuario",",
     "password": "senha123"
   }
   ```

3. **PUT** `/api/users/update/:id`  
   Atualiza as informações de um usuário.  

4. **DELETE** `/api/users/delete/:id`  
   Deleta um usuário pelo ID.  

5. **GET** `/api/users/list`  
   Retorna todos os usuários cadastrados.

6. **GET** `/api/users/list/:id`  
   Retorna um usuário pelo ID.

---

## 🖥️ Repositório Frontend

- Frontend: [Glitter & Glamour - Frontend](https://github.com/Angelmzm/glitter_and_glamour_front)

---

## 📦 Dependências e ferramentas usadas

### Dependências principais:  
- **Express**  
- **TypeORM**  
- **PostgreSQL**  
- **Bcrypt**  
- **JWT (jsonwebtoken)**  
- **CORS**  
- **Dotenv**

### DevDependencies:  
- **Nodemon**  
- **Sucrase**

---

## ⚙️ Configuração do Banco de Dados

Este projeto usa o PostgreSQL. Verifique a conexão no arquivo `.env`.

---

## 👩‍💻 Créditos

Projeto desenvolvido por:  
- [Angelica Moreira](https://github.com/Angelmzm)  
- [Kellyane Vieira](https://github.com/Kelly019)  
- [Laura Costa](https://github.com/karnsteinn)  
- [Sabrina Paes](https://github.com/biin4)  
- [Thamara Oliveira](https://github.com/thamara0)  
- [Zahira Silva](https://github.com/ZahiraS2-zz)

---


