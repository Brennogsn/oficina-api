# Oficina API

API para gerenciamento de oficina mecânica.

## Tecnologias

- Node.js
- Express
- PostgreSQL

---

## Rotas

### Criar serviço

POST /servicos

Body:

{
 "carro_id": number,
 "descricao": string,
 "preco": number
}

---

### Buscar serviços de um cliente

GET /servicos/cliente/:id

---

### Buscar serviços de um carro

GET /servicos/carro/:id

---

### Deletar serviço

DELETE /servicos/:id