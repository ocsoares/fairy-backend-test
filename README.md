# **Fairy Backend Test**

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/neliocursos/exemplo-readme/blob/main/LICENSE)

⚠️ **IMPORTANTE**: Usei como base a estrutura **PADRÃO** dos meus projetos pessoais, então algumas libs podem estar **desatualizadas**. 

# Autor

👤 Cauã Soares

💼 https://www.linkedin.com/in/ocauasoares

# Sobre o projeto

## Deploy na plataforma Render:

🚀 TALVEZ Fazer... (Link Deploy RENDER) <br>

Esse é um desafio técnico para desenvolvedor backend da empresa **Fairy**

⚠️ **ATENÇÃO**: O site pode demorar a carregar porque o servidor **desliga** após um tempo sem uso

# Documentação

Documentação feita com a ferramenta Swagger na rota **/docs**

# Executar o projeto localmente

Pré-requisitos: Typescript, NodeJS e Docker

```bash
# clonar o repositório
git clone https://github.com/ocsoares/fairy-backend-test

# instalar as bibliotecas
pnpm install (ou npm)

# criar um arquivo .env na pasta raíz do projeto

# configurar esse .env baseado no arquivo .env.example

# transpilar os arquivos do projeto para .js
pnpm run build (ou npm)

# iniciar o container do docker
docker-compose up -d

# executar o projeto
pnpm start (ou npm)
```
