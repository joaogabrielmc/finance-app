# Sistema Financeiro

Descrição ...

## Dependências

Este projeto utiliza as seguintes dependências:

- **bcrypt:** Biblioteca para hashing de senhas.
- **connect-mongo:** Middleware de armazenamento de sessão para o MongoDB.
- **dotenv:** Carrega variáveis de ambiente de um arquivo `.env` para `process.env`.
- **ejs:** Mecanismo de modelo para incorporar JavaScript no HTML.
- **express:** Framework web para Node.js.
- **express-flash:** Middleware para mensagens flash.
- **express-session:** Middleware para gerenciamento de sessão no Express.js.
- **mongodb e mongoose:** Conectores e ORM para MongoDB.
- **morgan:** Middleware de registro de solicitações HTTP.
- **nodemon:** Monitora alterações nos arquivos e reinicia automaticamente o servidor.
- **passport e passport-local:** Middleware de autenticação.
- **validator:** Biblioteca para validação de dados.

## Instalação

1. Clone este repositório.
   ```bash
      git clone
   ```
2. Instale as dependencias
   ```bash
      npm install 
   ```
3. Crie um arquivo `.env` 
  - PORT: 2121 (Pode ser qualquer porta, exeomplo: 3000) 
  - DB_STRING: `database URI`
4. Inicie a aplicação
  ```bash
     npm run start
  ```
# FinApi - Financeira
## Requisitos
### Conta do Usuário
- [x] Deve ser possível criar uma conta com as seguintes informações: {Nome, E-mail, Senha}
- [] Deve ser possível atualizar as informações da conta do usuário
- [] Deve ser possível deletar a conta do usuário

### Transações
- [x] Deve ser possível adicionar despesas, incluindo informações como categoria, valor e data
- [x] Deve ser possível ser possível visualizar o saldo atual
- [] Deve ser possível ser possível editar a transação

### Regras de Negócio
- [x] Não deve ser possível cadastrar uma conta com um e-mail já existente no sistema
- [x] O acesso ao sistema só deve ser permitido mediante autenticação com e-mail e senha
- [] Não deve ser possível excluir uma conta que não exista no sistema
- [x] Não deve ser possível adicionar uma transação sem preencher todas informações

### Recursos Adicionais
- [] Implementar categorização das despesas para melhor organização
- [] Permitir a definição de metas de gastos mensais
- [] Enviar notificações/alertas para o usuário quando atingir um limite de gastos
- [] Integrar com serviços externos para obter automaticamente transações de contas bancárias
- [] Criar relatórios detalhados de gastos e rendimentos por categoria
- [] Permitir a exportação de dados para formatos comuns (CSV, PDF)
- [] Implementar um sistema de tags para facilitar a busca e análise das transações
- [] Adicionar funcionalidade de planejamento financeiro a longo prazo
- [] Permitir a configuração de orçamentos mensais para diferentes categorias
- [] Implementar um painel de visualização com gráficos e estatísticas sobre os hábitos financeiros do usuário
