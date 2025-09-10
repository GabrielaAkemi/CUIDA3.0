
# Cuida

**Cuida** é um sistema web desenvolvido para os Postinhos de Saúde da Secretaria da Saúde de Marília, com o objetivo de facilitar o gerenciamento de medicamentos, cadastros de clientes e funcionários, além de fornecer informações em tempo real sobre o estoque e filas de atendimento nos postos.

---

## Funcionalidades Principais

### 1. Página Inicial

* Direciona o usuário para **Clientes** ou **Funcionários**.
* Disponibiliza informações gerais para funcionários.

### 2. Área do Funcionário (Login Profissional)

* Login exclusivo para profissionais de saúde.
* Acesso a cadastros de clientes.
* Controle de estoque de medicamentos:

  * Cadastrar novos medicamentos.
  * Dar baixa na saída de medicamentos.
* Visualização do estoque e das pessoas na fila do postinho selecionado.
* Acesso vinculado ao postinho específico através de seleção no **Maps** (API de localização).

### 3. Área do Cliente

* Cadastro de cliente.
* Exibe mapa com o **postinho mais próximo**.
* Após selecionar o postinho:

  * Acesso ao estoque de medicamentos.
  * Consulta de disponibilidade em tempo real.
  * Direcionamento para outro postinho caso algum medicamento esteja em falta.

### 4. Integração com Mapas

* API de maps para selecionar a sede/postinho.
* Permite verificar pessoas na fila de cada postinho.
* Facilita o direcionamento para o postinho mais próximo do cliente.

### 5. Estoque e Medicamentos

* Controle em tempo real de medicamentos disponíveis em cada postinho.
* Sistema inteligente de encaminhamento quando houver falta de medicamento.
* Histórico de entradas e saídas para controle eficiente.

---

## Tecnologias Utilizadas

* Frontend: React / Next.js
* Backend: (adicionar se houver, ex: Node.js / Express)
* Banco de Dados: (adicionar se houver, ex: PostgreSQL, Firebase)
* API de Mapas: Google Maps API ou equivalente
* Deploy: (adicionar plataforma, ex: Vercel, Netlify)

---

## Estrutura do Projeto

```
cuida/
├─ public/             # Arquivos estáticos (imagens, logos, etc.)
├─ src/
│  ├─ components/      # Componentes reutilizáveis
│  ├─ pages/           # Páginas do site (login, cliente, funcionário)
│  ├─ services/        # Conexão com APIs e banco de dados
│  ├─ styles/          # Arquivos CSS / Tailwind
│  └─ utils/           # Funções utilitárias
├─ README.md
├─ package.json
└─ next.config.js
```

---

## Como Rodar o Projeto

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/cuida.git
```

2. Instale as dependências:

```bash
npm install
```

3. Execute o projeto:

```bash
npm run dev
```

4. Abra o navegador em `http://localhost:3000`.

---

## Futuras Funcionalidades

* Dashboard com relatórios de estoque e atendimentos.
* Notificações para medicamentos próximos do fim do estoque.
* Integração com sistema de SMS ou WhatsApp para avisar clientes sobre disponibilidade.

---

## Contato

Desenvolvido para a **Secretaria da Saúde de Marília**
Para dúvidas ou sugestões, entre em contato com: \[[email@example.com](mailto:email@example.com)]

---



