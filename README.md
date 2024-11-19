# Projeto: Automação de Testes com WebDriverIO

## Descrição do Projeto

Este projeto é uma automação de testes baseada no framework **WebDriverIO** para os casos de teste fornecidos na aplicação **[Automation Exercise](https://automationexercise.com/test_cases)**. O objetivo é validar funcionalidades principais do site com testes organizados e de fácil manutenção, utilizando boas práticas de desenvolvimento de testes.

---

## Requisitos

### Tecnologias Utilizadas
- **Framework de Automação**: [WebDriverIO](https://webdriver.io/)
- **Relatório de Testes**: Allure Reports
- **Pipeline CI/CD**: GitHub Actions
- 
---

## Casos de Teste Automatizados

1. **Register User** (Test Case 1)
   - Cadastrar um novo usuário e validar o fluxo de criação de conta.

2. ~~**Search Product** (Test Case 9)~~
   - ~~Realizar uma busca por produtos e validar os resultados retornados.~~

3. ~~**Verify Product Quantity in Cart** (Test Case 13)~~
   - ~~Adicionar um produto ao carrinho, ajustar a quantidade e validar se o carrinho reflete corretamente.~~

4. ~~**Add Products in Cart** (Test Case 12)~~
   - ~~Adicionar múltiplos produtos ao carrinho e verificar seus detalhes.~~

5. ~~**Remove Products From Cart** (Test Case 17)~~
   - ~~Remover produtos do carrinho e validar que os produtos foram excluídos corretamente.~~

---

## Estrutura do Projeto

```
qa.automationexercise-web.webdriverio/
│
├── test/
│   ├── specs/                 # Arquivos de testes organizados por suítes
│   │    └── registerUser.e2e.js                 
│   ├── pageobjects/           # Page Objects para elementos e interações
│   │    └── common            # Page com elementos e funções comuns
│   └── allure-results/        # Relatórios gerados pelo Allure
│
├── wdio.conf.js               # Configuração principal do WebDriverIO
├── package.json               # Dependências do projeto
├── .github/
│   └── workflows/             # Pipeline configurada para execução no GitHub Actions
└── README.md                  # Documentação do projeto
```

---

## Configuração do Ambiente

### Pré-Requisitos
- Node.js (v21 ou superior)
- Gerenciador de pacotes (npm ou yarn)
- Navegador Chrome instalado

### Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/DiegoJOFernandes/qa.automationexercise-web.webdriverio.git
   cd qa.automationexercise-web.webdriverio
   ```

2. Instale as dependências do projeto:
   ```bash
   npm install
   ```

3. Configure o ambiente:
   - O arquivo `wdio.conf.js` já está configurado para executar os testes no navegador **Chrome** em **modo headless**.

---

## Execução dos Testes

### Rodar Todos os Testes
```bash
npm test
```

### Rodar um Caso de Teste Específico
```bash
npx wdio run wdio.conf.js --spec test/specs/registerUser.e2e.js
```

### Gerar Relatório Allure
1. Execute os testes para gerar os resultados:
   ```bash
   npm test
   ```

2. Gere e abra relatório com um só comando:
   ```bash
   npm run report
   ```
---

## Pipeline CI/CD

O pipeline está configurado no GitHub Actions e realiza as seguintes etapas:
1. Instalação das dependências.
2. Execução dos testes em modo headless.
3. Geração de relatórios de teste.

---

## Padrões Adotados

- **Organização em Page Objects**: Todos os elementos e interações estão encapsulados em classes de Page Objects, garantindo maior reutilização e legibilidade.
- **Testes em Suítes**: Cada caso de teste é mantido em arquivos separados dentro da pasta `specs/`.
- **Relatórios Detalhados**: Integração com Allure Reports para visualização clara dos resultados.

## **Autor**

- Nome: Diego Fernandes
- Contato: https://www.linkedin.com/in/diego-fernandes-it

---

## **Licença**

Este projeto está licenciado sob a [MIT License](LICENSE).
